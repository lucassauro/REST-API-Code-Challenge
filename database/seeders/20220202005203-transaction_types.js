module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Transaction_types', [{
      type: 'Transferência',
    },
    {
      type: 'Depósito',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Transaction_types', null, {});
  },
};
