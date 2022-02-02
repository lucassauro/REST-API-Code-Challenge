const AccountStatus = (sequelize, DataTypes) => {
  const accountStatus = sequelize.define('Account_status', {
    statusId: {
      type: DataTypes.STRING,
      field: 'status_id',
    },
    status: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  accountStatus.associate = (models) => {
    accountStatus.hasMany(models.Accounts, {
      foreignKey: 'status_id',
    });
  };
  return accountStatus;
};

module.exports = AccountStatus;
