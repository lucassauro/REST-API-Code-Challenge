const errors = {
  mustBeANumber: {
    error: 'mustBeANumber',
    message: 'Value deve ser um número.',
  },
  mustBePositive: {
    error: 'mustBePositive',
    message: 'Value deve ser positivo.',
  },
  maxTransfer: {
    error: 'maxTransfer',
    message: 'Por razões de segurança, o valor máximo para transferências é de $2.000.',
  },
};

const validateValue = async (req, _res, next) => {
  try {
    // const { value } = req.headers;
    const { value } = req.body;

    if (Number.isNaN(parseFloat(value))) return next(errors.mustBeANumber);
    if (value < 0) return next(errors.mustBePositive);

    if (req.url === '/me/transfer' && value > 2000) return next(errors.maxTransfer);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateValue;
