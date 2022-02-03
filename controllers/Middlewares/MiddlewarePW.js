const validatePW = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'Password é necessário' });
  if (password.length < 8) return res.status(400).json({ message: 'Password inválido. Mínimo 8 caracteres' });
  return next();
};

module.exports = validatePW;
