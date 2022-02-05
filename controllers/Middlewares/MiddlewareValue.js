const validateValue = async (req, res, next) => {
  const { value } = req.headers;
  if (value < 0) return res.status(400).json({ message: 'Não aceita valor negativo.' });
  if (req.url === '/me/transfer' && value > 2000) return res.status(400).json({ message: 'Por razões de segunrança, o valor máximo para transferências é de $2.000.' });
  return next();
};

module.exports = validateValue;
