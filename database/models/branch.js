const Branch = (sequelize, DataTypes) => {
  const branch = sequelize.define('Branch', {
    branchId: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'branch_id',
    },
    branch: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  branch.associate = (models) => {
    branch.hasMany(models.Account, {
      foreignKey: 'branch_id',
    });
  };

  return branch;
};

module.exports = Branch;
