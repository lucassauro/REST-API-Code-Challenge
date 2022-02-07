module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Accounts', [{
      account_number: '318-82-6264',
      pw_hash: '73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049',
      balance: 2000.00,
      type_id: 1,
      status_id: 1,
      customer_id: 1,
      branch_id: 1,
    }, {
      account_number: '510-78-3966',
      pw_hash: '73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049',
      balance: 10500.00,
      type_id: 1,
      status_id: 1,
      customer_id: 2,
      branch_id: 1,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};
