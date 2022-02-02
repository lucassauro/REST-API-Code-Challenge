module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Account_statuses', [{
      status: 'Ativo',
    },
    {
      status: 'Inativo',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Account_statuses', null, {});
  },
};
