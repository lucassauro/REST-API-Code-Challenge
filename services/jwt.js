const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || 'secret';

const sign = (payload) => jwt.sign(payload, secret, { expiresIn: '6h', algorithm: 'HS256' });
const verify = (token) => jwt.verify(token, secret);

module.exports = {
  sign,
  verify,
};
