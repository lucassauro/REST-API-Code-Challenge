const models = require('../database/models');
const { sequelize } = require('../database/models');

const create = async (cpf, firstName, middleName, lastName, hashedPassword, accountNumber) => {
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

    const id = await customer.customerId;

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

    return {
      customerId: id,
    };
  } catch (e) {
    await t.rollback();
    return { e: { error: e.message } };
  }
};

module.exports = create;
