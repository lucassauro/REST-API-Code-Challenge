module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      transactionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'transaction_id',
      },
      typeId: {
        type: Sequelize.INTEGER,
        field: 'type_id',
      },
      amount: {
        type: Sequelize.DECIMAL,
      },
      date: {
        type: Sequelize.DATE,
      },
      accountPayer: {
        field: 'account_payer',
        type: Sequelize.INTEGER,
      },
      accountPayee: {
        field: 'account_payee',
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Transactions');
  },
};
