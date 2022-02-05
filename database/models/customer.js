const Customer = (sequelize, DataTypes) => {
  const customer = sequelize.define('Customer', {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'customer_id',
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'first_name',
    },
    middleName: {
      type: DataTypes.STRING,
      field: 'middle_name',
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'last_name',
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    tableName: 'Customers',
  });
  customer.associate = (models) => {
    customer.hasOne(models.Account, {
      foreignKey: 'customer_id',
    });
  };
  return customer;
};

module.exports = Customer;
