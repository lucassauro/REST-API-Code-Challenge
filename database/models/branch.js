const Branch = (sequelize, DataTypes) => {
  const branch = sequelize.define('Branch', {
    branchId: {
      type: DataTypes.STRING,
      field: 'branch_id',
    },
    branch: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  branch.associate = (models) => {
    branch.hasMany(models.Accounts, {
      foreignKey: 'branch_id',
    });
  };

  return branch;
};

module.exports = Branch;
