const models = require('../../database/models');

const isCPFRegistered = async (cpf) => {
  try {
    const exists = await models.Customer.findOne({ where: { cpf } });

    if (exists) return { customerId: exists.customerId };

    return null;
  } catch (error) {
    return { error };
  }
};

module.exports = isCPFRegistered;
