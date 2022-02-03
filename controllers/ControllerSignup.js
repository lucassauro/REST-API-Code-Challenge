const ServiceSignup = require('../services/ServiceSignup');

const signup = async (req, res) => {
  const {
    cpf,
    firstName,
    middleName,
    lastName,
  } = req.body;
  const result = await ServiceSignup.signup(cpf, firstName, middleName, lastName, req.password);
  if (result.error) return res.status(400).json(result.error);
  return res.status(200).json(result);
};

module.exports = {
  signup,
};
