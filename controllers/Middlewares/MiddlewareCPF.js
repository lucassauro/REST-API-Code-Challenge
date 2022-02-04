const CPF = require('node-cpf');

const validateCPF = (req, res, next) => {
  const [, hash] = req.headers.authorization.split(' ');
  const [cpf] = Buffer.from(hash, 'base64').toString().split(':');
  const isValid = CPF.validate(cpf);
  if (!isValid) return res.status(400).json({ message: 'CPF inválido. Deve possuir 11 dígitos e ser válido' });
  return next();
};

module.exports = validateCPF;
