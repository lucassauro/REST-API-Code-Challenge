const CPF = require('node-cpf');

const generateCPF = () => {
  const result = CPF.generate(true);
  return result;
};

module.exports = generateCPF;
