const validateNames = (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;

  if (!firstName) return res.status(400).json({ message: 'firstName é obrigatório' });

  if (typeof firstName !== 'string' || firstName.length < 2) return res.status(400).json({ message: 'firstName deve ser string e possuir mais de 2 caracteres' });

  if (!lastName) return res.status(400).json({ message: 'lastName é obrigatório' });

  if (typeof lastName !== 'string' || lastName.length < 2) return res.status(400).json({ message: 'lastName deve ser string e possuir mais de 2 caracteres' });

  if (middleName && typeof middleName !== 'string') return res.status(400).json({ message: 'middleName, caso preenchido, deve ser string' });

  return next();
};

module.exports = validateNames;
