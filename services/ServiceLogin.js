const models = require('../database/models');
const isCPFRegistered = require('./isCPFRegistered');
const accountExists = require('./accountExists');
const { getAllValidAttempts } = require('./loginAttempts');

const errors = {
  notRegistered: {
    error: 'CPF informado não está cadastrado',
  },
  accountNotFound: {
    error: 'Não existe uma conta com a combinação de cpf/password informada',
  },
  BlockedLogin: {
    error: 'Terceira tentativa de login mal sucedida. Login bloqueado por 5 minutos.', // template string para informar os minutos.
  },
};

const login = async (cpf, password) => {
  const attempts = await getAllValidAttempts(cpf);

  if (attempts.length > 2) return errors.BlockedLogin;

  try {
    const customer = await isCPFRegistered(cpf);

    if (!customer) return errors.notRegistered;

    const account = await accountExists(undefined, await customer.customerId, password);

    if (account) {
      // successful login so failed attempts need to be deleted.
      await models.Failed_login_attempt.destroy({ where: { cpf } });
    }

    if (!account) {
      // unsuccessful login, so create a new row on Failed_login table and returns error.
      await models.Failed_login_attempt.create({ cpf, customerId: customer.customerId });

      return errors.accountNotFound;
    }

    return customer;
  } catch (e) {
    return { e: { error: e.message } };
  }
};

module.exports = {
  login,
};
