const Transaction = (sequelize, DataTypes) => {
  const transaction = sequelize.define('Transaction', {
    transactionId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'transaction_id',
    },
    typeId: {
      type: DataTypes.INTEGER,
      field: 'type_id',
    },
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    accountPayer: {
      type: DataTypes.INTEGER,
      field: 'account_payer',
      references: {
        model: 'Account',
        key: 'account_id',
      },
    },
    accountPayee: {
      type: DataTypes.INTEGER,
      field: 'account_payee',
      references: {
        model: 'Account',
        key: 'account_id',
      },
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
  transaction.associate = (models) => {
    transaction.belongsToMany(models.Account, {
      foreignKey: 'account_id', as: 'account_payer',
    });
    transaction.belongsToMany(models.Account, {
      foreignKey: 'account_id', as: 'account_payee',
    });
  };
  return transaction;
};

module.exports = Transaction;
