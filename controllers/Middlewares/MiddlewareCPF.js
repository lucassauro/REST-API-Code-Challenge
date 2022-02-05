const CPF = require('node-cpf');

const errors = {
  invalidCPF: {
    error: 'invalidCPF',
    message: 'CPF deve possuir 11 dígitos e ter dígito verificador válido.',
  },
};

const validateCPF = (req, _res, next) => {
  try {
    const [, hash] = req.headers.authorization.split(' ');

    const [cpf] = Buffer.from(hash, 'base64').toString().split(':');

    const isValid = CPF.validate(cpf);

    if (!isValid) return next(errors.invalidCPF);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateCPF;
