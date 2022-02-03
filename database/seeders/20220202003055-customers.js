module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Customers', [{
      cpf: '273.976.317-46',
      first_name: 'Tício',
      middle_name: null,
      last_name: 'Ticiano',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
