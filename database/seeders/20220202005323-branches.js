module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Branches', [{
      branch: 'Digital',
    },
    {
      branch: 'Agência 01',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Branches', null, {});
  },
};
