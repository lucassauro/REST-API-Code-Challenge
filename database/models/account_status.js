const AccountStatus = (sequelize, DataTypes) => {
  const accountStatus = sequelize.define('Account_status', {
    statusId: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'status_id',
    },
    status: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  accountStatus.associate = (models) => {
    accountStatus.hasMany(models.Account, {
      foreignKey: 'status_id',
    });
  };
  return accountStatus;
};

module.exports = AccountStatus;
