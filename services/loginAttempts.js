const { Op } = require('sequelize');
const { sequelize } = require('../database/models');
const models = require('../database/models');

const getAllValidAttempts = async (cpf) => {
  // destroy the attempts that was made more than X minutes ago.
  const minutes = 5;
  await models.Failed_login_attempt.destroy({
    where: sequelize.where(sequelize.fn(
      'timestampdiff',
      sequelize.literal('minute'),
      sequelize.col('date'),
      sequelize.fn('NOW'),
    ), {
      [Op.gte]: minutes,
    }),
  });
  // get attempts after removing older ones.
  const attempts = await models.Failed_login_attempt.findAll({ where: { cpf } });
  return attempts;
};

module.exports = {
  getAllValidAttempts,
};
