const { sequelize } = require('../database/models/index');
const models = require('../database/models');
const findBalance = require('./functions/findBalance');

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

const deposits = async (value, customerId, accountNumber) => {
  try {
    const [balance] = await findBalance(customerId);
    const newBalance = balance + parseFloat(value);

    await models.Account.update({
      balance: newBalance,
    }, {
      where: { customerId, accountNumber },
    });
    return {
      previous: balance.toFixed(2),
      balance: newBalance.toFixed(2),
    };
  } catch (error) {
    return { error };
  }
};

const transfers = async (customerId, value, to) => {
  const t = await sequelize.transaction();

  const [payerBalance, accountNumber] = await findBalance(customerId);

  if (accountNumber === to) return errors.invalidTransfer;

  if (payerBalance < value) return errors.insufficientBalance;

  const payeeBalance = await findBalance(undefined, to);

  if (typeof payeeBalance === 'undefined' || payeeBalance === null) return errors.accountNotFound;

  const newPayerBalance = payerBalance - parseFloat(value);

  const newPayeeBalance = payeeBalance + parseFloat(value);

  try {
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
