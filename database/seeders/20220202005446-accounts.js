module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Accounts', [{
      account_number: '318-82-6264',
      pw_hash: '6f5a1bbc634c46a07fedd1b6a015fd417f51499a17cd8cebcb3e1470c06684c1',
      balance: 2000.00,
      type_id: 1,
      status_id: 1,
      // customer_id: 1,
      branch_id: 1,
    },
    {
      account_number: '408-92-3605',
      pw_hash: '73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049',
      balance: 20000.00,
      type_id: 2,
      status_id: 1,
      // customer_id: 3,
      branch_id: 2,
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};