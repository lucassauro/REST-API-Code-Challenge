module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      accountId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'account_id',
      },
      accountNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'account_number',
      },
      pwHash: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'pw_hash',
      },
      balance: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      typeId: {
        type: Sequelize.INTEGER,
        field: 'type_id',
        references: {
          model: 'Account_types',
          key: 'type_id',
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        field: 'status_id',
        references: {
          model: 'Account_statuses',
          key: 'status_id',
        },
      },
      customerId: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        references: {
          model: 'Customers',
          key: 'customer_id',
        },
      },
      branchId: {
        type: Sequelize.INTEGER,
        field: 'branch_id',
        references: {
          model: 'Branches',
          key: 'branch_id',
        },
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
    await queryInterface.dropTable('Accounts');
  },
};
