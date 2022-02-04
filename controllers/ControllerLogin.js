const ServiceLogin = require('../services/ServiceLogin');
const { sign } = require('../services/jwt');

const login = async (req, res) => {
  const [, hash] = req.headers.authorization.split(' ');

  const [cpf] = Buffer.from(hash, 'base64').toString().split(':');

  const result = await ServiceLogin.login(cpf, req.password);

  if (!result) return res.status(400).json({ message: 'CPF ou password inválidos' });

  if (result.error) return res.status(400).json(result);

  const token = sign(result); // result tem o seguinte formato { costumerId: 123 }

  return res.status(200).json({ result, token });
};

module.exports = {
  login,
};
