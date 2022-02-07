const { sequelize } = require('../database/models/index');
const models = require('../database/models');
const findBalance = require('./functions/findBalance');
const verifyAccount = require('./functions/verifyAccount');

const errors = {
  invalidTransfer: {
    error: 'invalidTransfer',
    message: 'Não é possível transferir para a própria conta. Escolha a opçao depósito.',
  },
  insufficientBalance: {
    error: 'insufficientBalance',
    message: 'Saldo insuficiente',
  },
  accountNotFound: {
    error: 'accountNotFound',
    message: 'Conta destinatário não encontrada',
  },
};

const deposits = async (val, customerId, accountNumber) => {
  const t = await sequelize.transaction();

  const value = parseFloat(val);

  try {
    const [balance, accountId] = await findBalance(customerId);

    const newBalance = balance + value;

    await models.Transaction.create({
      typeId: 2, // transaction_type deposit;
      amount: value,
      accountPayer: accountId,
      accountPayee: accountId,
    }, {
      transaction: t,
    });

    await models.Account.update({
      balance: newBalance,
    }, {
      where: { customerId, accountNumber },
      transaction: t,
    });

    t.commit();

    return {
      previous: balance.toFixed(2),
      balance: newBalance.toFixed(2),
    };
  } catch (error) {
    t.rollback();

    return { error };
  }
};

const transfers = async (customerId, val, to) => {
  const t = await sequelize.transaction();

  const value = parseFloat(val);

  try {
    const account = await verifyAccount(to);

    const payeeAccountId = account.accountId;

    const [payerBalance, accountId, accountNumber] = await findBalance(customerId);

    if (accountNumber === to) return errors.invalidTransfer;

    if (payerBalance < value) return errors.insufficientBalance;

    const payeeBalance = await findBalance(undefined, to);

    if (typeof payeeBalance === 'undefined' || payeeBalance === null) return errors.accountNotFound;

    const newPayerBalance = payerBalance - value;

    const newPayeeBalance = payeeBalance + value;

    await models.Transaction.create({
      typeId: 1, // transaction_type transfer;
      amount: value,
      accountPayer: accountId,
      accountPayee: payeeAccountId,
    }, {
      transaction: t,
    });

    await models.Account.update(
      { balance: newPayerBalance },
      { where: { customerId }, transaction: t },
    );

    await models.Account.update(
      { balance: newPayeeBalance },
      { where: { accountNumber: to }, transaction: t },
    );

    t.commit();

    return {
      previous: payerBalance.toFixed(2),
      balance: newPayerBalance.toFixed(2),
    };
  } catch (error) {
    t.rollback();

    return { error };
  }
};

module.exports = {
  deposits,
  transfers,
};
