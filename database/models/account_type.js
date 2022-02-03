const AccountType = (sequelize, DataTypes) => {
  const accountType = sequelize.define('Account_type', {
    typeId: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'type_id',
    },
    type: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  accountType.associate = (models) => {
    accountType.hasMany(models.Account, {
      foreignKey: 'type_id',
    });
  };
  return accountType;
};

module.exports = AccountType;
