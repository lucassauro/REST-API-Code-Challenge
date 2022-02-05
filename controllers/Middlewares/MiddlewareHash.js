const SHA256 = require('crypto-js/sha256');

const passwordHash = (req, _res, next) => {
  try {
    const [, hash] = req.headers.authorization.split(' ');

    const [, password] = Buffer.from(hash, 'base64').toString().split(':');

    const hashedPW = SHA256(password).toString();

    req.password = hashedPW;

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = passwordHash;
