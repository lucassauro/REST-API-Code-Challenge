const errors = {
  missingPassword: {
    error: 'missingPassword',
    message: 'Password é necessário',
  },
  invalidPassword: {
    error: 'invalidPassword',
    message: 'O password deve conter de 8 a 64 caracteres e, no mínimo um número, uma letra minúscula, uma letra maiscula e um caracter especial.',
  },
};

const validatePW = (req, _res, next) => {
  try {
    const [, hash] = req.headers.authorization.split(' ');

    const [, password] = Buffer.from(hash, 'base64').toString().split(':');

    if (!password) return next(errors.missingPassword);

    if (!password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/)) return next(errors.invalidPassword);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validatePW;
