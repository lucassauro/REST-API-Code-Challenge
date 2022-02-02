module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Account_types', {
      typeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'type_id',
      },
      type: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Account_types');
  },
};
