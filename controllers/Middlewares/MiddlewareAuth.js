const JWT = require('../../services/functions/jwt');
const findCustomerById = require('../../services/functions/findCustomerById');
const verifyAccount = require('../../services/functions/verifyAccount');

const errors = {
  invalidToken: {
    error: 'invalidToken',
    message: 'O token não contém informação de um usuário válido',
  },
};

const auth = async (req, _res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    const payload = JWT.verify(token);

    const customer = await findCustomerById(payload.customerId);

    const account = await verifyAccount(undefined, payload.customerId);

    if (!customer) return next(errors.invalidToken);

    req.me = customer;
    req.myAccount = account;

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = auth;
