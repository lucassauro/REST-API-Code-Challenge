const models = require('../../database/models');

const findBalance = async (customerId, accountNumber) => {
  if (typeof customerId !== 'undefined') {
    try {
      const account = await models.Account.findOne({ where: { customerId } });

      return [parseFloat(account.balance), account.accountNumber];
    } catch (error) {
      return { error };
    }
  }
  if (typeof accountNumber !== 'undefined') {
    try {
      const account = await models.Account.findOne({ where: { accountNumber } });

      if (!account) return null;

      return parseFloat(account.balance);
    } catch (error) {
      return { error };
    }
  }
  return null;
};

module.exports = findBalance;
