const CPF = require('../services/generateCPF');

const generateCPF = async (_req, res) => {
  const cpf = CPF();
  res.status(200).json({ message: 'This routes generates a random and valid CPF for development purposes', cpf });
};

module.exports = generateCPF;
