const models = require('../../database/models');

const verifyAccount = async (accountNumber, customerId, password) => {
  if (typeof accountNumber !== 'undefined') {
    try {
      const account = await models.Account.findOne(
        {
          where: {
            accountNumber,
          },
        },
      );
      return account;
    } catch (error) {
      return { error };
    }
  }
  if (typeof password !== 'undefined' && typeof customerId !== 'undefined') {
    try {
      const account = await models.Account.findOne(
        {
          where: {
            customerId,
            pwHash: password,
          },
        },
      );
      return account;
    } catch (error) {
      return { error };
    }
  }
  if (typeof customerId !== 'undefined') {
    try {
      const account = await models.Account.findOne(
        {
          where: {
            customerId,
          },
          attributes: { exclude: ['customer_id', 'branch_id', 'status_id', 'type_id'] },
        },
      );
      return account;
    } catch (error) {
      return { error };
    }
  }
  return null;
};

module.exports = verifyAccount;
