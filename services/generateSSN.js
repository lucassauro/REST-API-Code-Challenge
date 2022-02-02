const ssn = require('ssn');

const generateSSN = () => {
  const newSSN = new ssn.RandomSSN();
  return newSSN.value().toString();
};

module.exports = generateSSN;
