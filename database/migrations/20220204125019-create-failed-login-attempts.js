module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Failed_Login_Attempts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        field: 'account_number',
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      timestamps: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Failed_Login_Attempts');
  },
};
