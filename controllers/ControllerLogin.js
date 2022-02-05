const ServiceLogin = require('../services/ServiceLogin');
const { sign } = require('../services/functions/jwt');

const login = async (req, res, next) => {
  const [, hash] = req.headers.authorization.split(' ');

  const [cpf] = Buffer.from(hash, 'base64').toString().split(':');

  try {
    const result = await ServiceLogin.login(cpf, req.password);

    if (result.error || !result) return next(result);

    const token = sign(result); // result tem o seguinte formato { costumerId: 123 }

    return res.status(200).json({ result, token });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  login,
};
