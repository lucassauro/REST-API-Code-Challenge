const models = require('../database/models');

const findCustomerById = async (customerId) => {
  const customer = await models.Customer.findOne({ where: { customerId } });

  return customer;
};

module.exports = findCustomerById;
