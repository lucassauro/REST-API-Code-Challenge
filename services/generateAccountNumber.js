const ssn = require('ssn');
const accountExists = require('./accountExists');

// Account numbers generated with social security
// number format for low probability to be repeated;
const generateSSN = () => {
  const newSSN = new ssn.RandomSSN();

  return newSSN.value().toFormattedString();
};

const generateAccountNumber = async () => {
  const accountNumber = generateSSN();

  if (await accountExists(accountNumber)) return generateSSN();

  return accountNumber;
};

module.exports = generateAccountNumber;
