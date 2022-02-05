const JWT = require('../../services/jwt');
const findCustomerById = require('../../services/findCustomerById');
const accountExists = require('../../services/accountExists');

const auth = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ');

  const payload = JWT.verify(token);

  const customer = await findCustomerById(payload.customerId);

  const account = await accountExists(undefined, payload.customerId);

  if (!customer) return res.status(401);

  req.me = customer;
  req.myAccount = account;

  return next();
};

module.exports = auth;
