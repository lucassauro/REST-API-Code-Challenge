const SHA256 = require('crypto-js/sha256');

const passwordHash = async (req, res, next) => {
  const { password } = req.body;
  const hashedPW = await SHA256(password);
  req.password = hashedPW;
  next();
};

module.exports = passwordHash;
