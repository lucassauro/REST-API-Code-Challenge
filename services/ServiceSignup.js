const { sequelize } = require('../database/models');
const models = require('../database/models');
const generateSSN = require('./generateSSN');

const cpfExists = async (cpf) => {
  const exists = await models.Customer.findOne({ where: { cpf } });
  if (exists) return { error: { error: 'alreadyExists', message: 'O CPF informado já existe no banco de dados.' } };
  return false;
};

const accountExists = async (accountNumber) => {
  const exists = await models.Account.findOne({ where: { accountNumber } });
  if (exists) return true;
  return false;
};

const generateAccountNumber = async () => {
  const accountNumber = generateSSN();
  if (await accountExists(accountNumber)) return generateSSN();
  return accountNumber;
};

const insert = async (cpf, firstName, middleName, lastName, hashedPassword, accountNumber) => {
  const t = await sequelize.transaction();
  try {
    const customer = await models.Customer.create({
      cpf,
      firstName,
      middleName,
      lastName,
    }, {
      transaction: t,
    });
    const id = await customer.dataValues.customerId;
    await models.Account.create({
      accountNumber,
      pwHash: hashedPassword,
      balance: 0,
      typeId: 1,
      statusId: 1,
      customerId: id,
      branchId: 1,
    }, {
      transaction: t,
    });
    await t.commit();
    return { message: `Customer adicionado e conta criada ${accountNumber}` };
  } catch (e) {
    await t.rollback();
    return { message: 'Deu errado' };
  }
};

const signup = async (cpf, firstName, middleName, lastName, hashedPassword) => {
  const exists = await cpfExists(cpf);
  const accountNumber = await generateAccountNumber();
  if (exists && exists.error) return exists.error;
  const r = await insert(cpf, firstName, middleName, lastName, hashedPassword, accountNumber);
  return r;
};

module.exports = {
  signup,
};
