// ESLint disabled at line 7, because
// no-unused-vars is uncompatible with next() function of express.js;
// check it out following links:
// https://github.com/expressjs/generator/issues/78;
// https://github.com/eslint/eslint/issues/1494;

// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  const statusByError = {
    // 400
    insufficientBalance: 400, // transaction
    invalidCPF: 400, // cpf
    invalidFirstName: 400, // name
    invalidLastName: 400, // name
    invalidMiddleName: 400, // name
    invalidPassword: 400, // password
    invalidTransfer: 400, // transaction
    maxTransfer: 400, // value
    missingFirstName: 400, // name
    missingLastName: 400, // name
    missingPassword: 400, // password
    mustBePositiveNumber: 400, // value
    // 401
    invalidToken: 401, // auth
    // 403
    notRegistered: 403, // login
    wrongCredentials: 403, // login
    blockedLogin: 403, // login
    // 404
    accountNotFound: 404, // transaction
    notFound: 404,
    // 409
    alreadyRegistered: 409, // signup
  };

  if (!err) return res.status(500).json({ message: 'Ocorreu algum erro.' });

  const status = statusByError[err.error] || 500;

  const error = err.name || err.errorCode || err.error;

  return res.status(status).json({ error, message: err.message });
};
