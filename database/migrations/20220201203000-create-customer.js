module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      customerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'customer_id',
      },
      cpf: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
      },
      middleName: {
        type: Sequelize.STRING,
        field: 'middle_name',
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Customers');
  },
};
