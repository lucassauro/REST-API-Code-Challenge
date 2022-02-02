const Customer = (sequelize, DataTypes) => {
  const customer = sequelize.define('Customer', {
    customerId: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
    },
    middleName: {
      type: DataTypes.STRING,
      field: 'middle_name',
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
  });
  customer.associate = (models) => {
    customer.hasOne(models.Account, {
      foreignKey: 'customer_id',
    });
  };
  return customer;
};

module.exports = Customer;
