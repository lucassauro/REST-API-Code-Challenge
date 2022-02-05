const Account = (sequelize, DataTypes) => {
  const account = sequelize.define('Account', {
    accountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'account_id',
    },
    accountNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'account_number',
    },
    pwHash: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'pw_hash',
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    typeId: {
      type: DataTypes.INTEGER,
      field: 'type_id',
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'status_id',
    },
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'customer_id',
    },
    branchId: {
      type: DataTypes.INTEGER,
      field: 'branch_id',
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
    tableName: 'Accounts',
  });
  account.associate = (models) => {
    account.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
    });
    account.belongsTo(models.Branch, {
      foreignKey: 'branch_id',
    });
    account.belongsTo(models.Account_status, {
      foreignKey: 'status_id',
    });
    account.belongsTo(models.Account_type, {
      foreignKey: 'type_id',
    });
  };
  return account;
};

module.exports = Account;
