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
    amount: DataTypes.DECIMAL(10, 2),
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
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
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    tableName: 'Transactions',
  });
  transaction.associate = (models) => {
    transaction.belongsToMany(models.Account, {
      foreignKey: 'account_id', as: 'account_payer', through: 'transaction',
    });
    transaction.belongsToMany(models.Account, {
      foreignKey: 'account_id', as: 'account_payee', through: 'transaction',
    });
  };
  return transaction;
};

module.exports = Transaction;
