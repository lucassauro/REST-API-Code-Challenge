const ServiceSignup = require('../services/ServiceSignup');
const { sign } = require('../services/functions/jwt');

const signup = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
  } = req.body;

  const [, hash] = req.headers.authorization.split(' ');

  const [cpf] = Buffer.from(hash, 'base64').toString().split(':');

  try {
    const result = await ServiceSignup.signup(cpf, firstName, middleName, lastName, req.password);

    if (result.error || !result) return next(result);

    const token = sign(result); // result tem o seguinte formato { costumerId: 123 }

    return res.status(200).json({ result, token });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  signup,
};
