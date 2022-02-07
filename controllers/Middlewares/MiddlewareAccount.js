const { ParseSSN } = require('ssn');

const errors = {
  invalidAccountNumber: {
    error: 'invalidAccountNumber',
    message: 'Número de conta inválido',
  },
};

const validateAccountNumber = async (req, _res, next) => {
  try {
    // const split = req.headers.to.split('-');
    const split = req.body.to.split('-');
    const accountSemHifen = split.join('');

    const isValid = new ParseSSN(accountSemHifen);

    if (!isValid) return next(errors.invalidAccountNumber);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateAccountNumber;
