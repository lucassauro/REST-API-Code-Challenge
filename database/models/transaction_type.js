const TransactionType = (sequelize, DataTypes) => {
  const transactionType = sequelize.define('Transaction_type', {
    typeId: {
      type: DataTypes.STRING,
      field: 'type_id',
    },
    type: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  transactionType.associate = (models) => {
    transactionType.hasMany(models.Transaction, {
      foreignKey: 'type_id',
    });
  };
  return transactionType;
};

module.exports = TransactionType;
