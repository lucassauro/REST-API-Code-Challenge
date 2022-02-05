const CPF = require('node-cpf');

const generateCPF = () => CPF.generate(true);

module.exports = generateCPF;
