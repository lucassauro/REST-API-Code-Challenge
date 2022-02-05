const models = require('../../database/models');

const findCustomerById = async (customerId) => {
  try {
    const customer = await models.Customer.findOne({ where: { customerId } });

    return customer;
  } catch (error) {
    return { error };
  }
};

module.exports = findCustomerById;
