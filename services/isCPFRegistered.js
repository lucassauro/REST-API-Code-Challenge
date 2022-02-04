const models = require('../database/models');

const isCPFRegistered = async (cpf) => {
  const exists = await models.Customer.findOne({ where: { cpf } });

  if (exists) return { customerId: exists.customerId };
  return false;
};

module.exports = isCPFRegistered;
