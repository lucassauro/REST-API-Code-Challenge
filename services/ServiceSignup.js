const createAccount = require('./functions/createCustomerAndAccount');
const isCPFRegistered = require('./functions/isCPFRegistered');
const generateAccountNumber = require('./functions/generateAccountNumber');

const errors = {
  alreadyRegistered: {
    error: 'alreadyRegistered',
    message: 'CPF informado já está cadastrado',
  },
};

const signup = async (cpf, firstName, middleName, lastName, hashedPW) => {
  try {
    const customer = await isCPFRegistered(cpf);

    if (customer) return errors.alreadyRegistered;

    const accountNumber = await generateAccountNumber();

    const result = await createAccount(
      cpf,
      firstName,
      middleName,
      lastName,
      hashedPW,
      accountNumber,
    );

    return result;
  } catch (error) {
    return { error };
  }
};

module.exports = {
  signup,
};
