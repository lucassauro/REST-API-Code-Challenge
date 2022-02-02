module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Account_types', [{
      type: 'Conta corrente',
    },
    {
      type: 'Conta salário',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Account_types', null, {});
  },
};
