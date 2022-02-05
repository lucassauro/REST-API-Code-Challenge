const models = require('../database/models');

const accountExists = async (accountNumber, customerId, password) => {
  if (typeof accountNumber !== 'undefined') {
    const account = await models.Account.findOne(
      {
        where: {
          accountNumber,
        },
      },
    );
    return account;
  }
  if (typeof password !== 'undefined' && typeof customerId !== 'undefined') {
    const account = await models.Account.findOne(
      {
        where: {
          customerId,
          pwHash: password,
        },
      },
    );
    return account;
  }
  if (typeof customerId !== 'undefined') {
    const account = await models.Account.findOne(
      {
        where: {
          customerId,
        },
      },
    );
    return account;
  }
  return null;
};

module.exports = accountExists;
