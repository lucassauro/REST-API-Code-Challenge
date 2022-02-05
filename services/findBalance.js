const models = require('../database/models');

const findBalance = async (customerId, accountNumber) => {
  if (typeof customerId !== 'undefined') {
    const account = await models.Account.findOne({ where: { customerId } });
    return parseFloat(account.balance);
  }
  if (typeof accountNumber !== 'undefined') {
    const account = await models.Account.findOne({ where: { accountNumber } });
    return parseFloat(account.balance);
  }
  return null;
};

module.exports = findBalance;
