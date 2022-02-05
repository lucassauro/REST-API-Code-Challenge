const models = require('../database/models');
const isCPFRegistered = require('./functions/isCPFRegistered');
const verifyAccount = require('./functions/verifyAccount');
const { getAllValidAttempts } = require('./functions/loginAttempts');

const errors = {
  notRegistered: {
    error: 'notRegistered',
    message: 'CPF informado não está cadastrado',
  },
  wrongCredentials: {
    error: 'wrongCredentials',
    message: 'Credenciais incorretas.',
  },
  blockedLogin: {
    error: 'blockedLogin',
    message: 'Terceira tentativa de login mal sucedida. Login bloqueado por 5 minutos.',
  },
};

const login = async (cpf, password) => {
  const attempts = await getAllValidAttempts(cpf);

  if (attempts.length > 2) return errors.blockedLogin;

  try {
    const customer = await isCPFRegistered(cpf);
    // development only
    // for security reasons wrongCredentials error should
    // be preferred insted of this.
    if (!customer) return errors.notRegistered;

    const account = await verifyAccount(undefined, await customer.customerId, password);

    if (account) {
      // in case of successful login failed attempts need to be deleted.
      await models.Failed_login_attempt.destroy({ where: { cpf } });
    }

    if (!account) {
      // in case of unsuccessful login
      // create a new row on Failed_login_attempts table and returns error.
      await models.Failed_login_attempt.create({ cpf, customerId: customer.customerId });

      return errors.wrongCredentials;
    }

    return customer;
  } catch (error) {
    return { error };
  }
};

module.exports = {
  login,
};
