// const models = require('../database/models');
const isCPFRegistered = require('./isCPFRegistered');
const accountExists = require('./accountExists');

const errors = {
  notRegistered: {
    error: 'CPF informado não está cadastrado',
  },
  accountNotFound: {
    error: 'Não existe uma conta com a combinação de cpf/password informada',
  },
};

const login = async (cpf, password) => {
  try {
    const customer = await isCPFRegistered(cpf);

    if (!customer) return errors.notRegistered;

    const account = await accountExists(undefined, await customer.customerId, password);

    if (!account) return errors.accountNotFound;

    return customer;
  } catch (e) {
    return { e: { error: e.message } };
  }
};

module.exports = {
  login,
};
