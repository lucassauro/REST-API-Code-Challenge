const validatePW = (req, res, next) => {
  const [, hash] = req.headers.authorization.split(' ');

  const [, password] = Buffer.from(hash, 'base64').toString().split(':');

  if (!password) return res.status(400).json({ message: 'Password é necessário' });

  if (password.length < 8) return res.status(400).json({ message: 'Password inválido. Mínimo 8 caracteres' });

  return next();
};

module.exports = validatePW;
