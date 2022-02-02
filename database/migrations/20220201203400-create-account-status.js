module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Account_statuses', {
      statusId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'status_id',
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Account_statuses');
  },
};
