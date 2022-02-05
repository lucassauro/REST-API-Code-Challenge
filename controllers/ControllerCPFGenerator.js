const CPF = require('../services/functions/generateCPF');

const generateCPF = async (_req, res, next) => {
  try {
    const cpf = CPF();

    return res.status(200).json({ message: 'This routes generates a random and valid CPF for development purposes', cpf });
  } catch (e) {
    return next(e);
  }
};

module.exports = generateCPF;
