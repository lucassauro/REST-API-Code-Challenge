const errors = {
  missingFirstName: {
    error: 'missingFirstName',
    message: 'firstName é obrigatório',
  },
  missingLastName: {
    error: 'missingLastName',
    message: 'lastName é obrigatório',
  },
  invalidFirstName: {
    error: 'invalidFirstName',
    message: 'firstName deve ser string e possuir mais de 2 caracteres',
  },
  invalidLastName: {
    error: 'invalidLastName',
    message: 'lastName deve ser string e possuir mais de 2 caracteres',
  },
  invalidMiddleName: {
    error: 'invalidMiddleName',
    message: 'middleName, caso preenchido, deve ser string',
  },
};

const validateNames = (req, res, next) => {
  try {
    const { firstName, middleName, lastName } = req.body;

    if (!firstName) return next(errors.missingFirstName);

    if (typeof firstName !== 'string' || firstName.length < 2) return next(errors.invalidFirstName);

    if (!lastName) return next(errors.missingLastName);

    if (typeof lastName !== 'string' || lastName.length < 2) return next(errors.invalidLastName);

    if (middleName && typeof middleName !== 'string') return next(errors.invalidMiddleName);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateNames;
