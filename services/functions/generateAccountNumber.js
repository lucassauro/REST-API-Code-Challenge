const ssn = require('ssn');
const verifyAccount = require('./verifyAccount');

const generateSSN = () => new ssn.RandomSSN().value().toFormattedString();

const generateAccountNumber = async () => {
  const accountNumber = generateSSN();

  if (await verifyAccount(accountNumber)) return generateSSN();

  return accountNumber;
};

module.exports = generateAccountNumber;
