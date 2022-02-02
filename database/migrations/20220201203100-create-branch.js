module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Branches', {
      branchId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'branch_id',
      },
      branch: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Branches');
  },
};
