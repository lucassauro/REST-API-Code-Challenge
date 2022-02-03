const SHA256 = require('crypto-js/sha256');

const passwordHash = (req, res, next) => {
  const { password } = req.body;
  const hashedPW = SHA256(password).toString();
  req.password = hashedPW;
  next();
};

module.exports = passwordHash;
