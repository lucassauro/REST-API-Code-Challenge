const { sequelize } = require('../database/models/index');
const models = require('../database/models');
const findBalance = require('./findBalance');

const deposits = async (value, customerId, accountNumber) => {
  try {
    const balance = await findBalance(customerId);
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
  } catch (e) {
    return e;
  }
};

const transfers = async (customerId, value, to) => {
  const t = await sequelize.transaction();

  const [payerBalance, accountNumber] = await findBalance(customerId);

  if (accountNumber === to) return { message: 'Não é possível transferir para a própria conta. Escolha a opçao depósito.' };

  if (payerBalance < value) return { message: 'Saldo insuficiente' };

  const newPayerBalance = payerBalance - parseFloat(value);

  const payeeBalance = await findBalance(undefined, to);

  if (!payeeBalance) return { message: 'Conta destinatário não encontrada' };

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
      previous: payerBalance,
      balance: newPayerBalance,
    };
  } catch (e) {
    t.rollback();
    return e;
  }
};

module.exports = {
  deposits,
  transfers,
};
