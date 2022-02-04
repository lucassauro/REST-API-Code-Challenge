const FailedLoginAttempt = (sequelize, DataTypes) => {
  const failedLoginAttempt = sequelize.define('Failed_login_attempt', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      field: 'customer_id',
      type: DataTypes.INTEGER,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountNumber: {
      field: 'account_number',
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {
    sequelize,
    underscored: true,
    tableName: 'Failed_Login_Attempts',
    timestamps: false,
  });
  return failedLoginAttempt;
};

module.exports = FailedLoginAttempt;
