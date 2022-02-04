const JWT = require('../../services/jwt');
const findCustomerById = require('../../services/findCustomerById');

const auth = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ');

  const payload = JWT.verify(token);

  const customer = await findCustomerById(payload.result.customerId);

  if (!customer) return res.status(401);

  req.auth = customer;

  return next();
};

module.exports = auth;
