const createAccount = require('./createCustomerAndAccount');
const isCPFRegistered = require('./isCPFRegistered');
const generateAccountNumber = require('./generateAccountNumber');

const errors = {
  alreadyRegistered: {
    error: 'CPF informado já está cadastrado',
  },
};

const signup = async (cpf, firstName, middleName, lastName, hashedPW) => {
  const customer = await isCPFRegistered(cpf);

  if (customer) return errors.alreadyRegistered;

  const accountNumber = await generateAccountNumber();

  const result = await createAccount(cpf, firstName, middleName, lastName, hashedPW, accountNumber);

  return result;
};

module.exports = {
  signup,
};
