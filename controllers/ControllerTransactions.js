const ServiceTransactions = require('../services/ServiceTransactions');

const deposits = async (req, res) => {
  const { value } = req.headers;
  const { customerId, accountNumber } = req.myAccount;

  const result = await ServiceTransactions.deposits(value, customerId, accountNumber);
  // fazer tratamento de erro

  res.status(200).json(result);
};

const transfers = async (req, res) => {
  const { value, to } = req.headers;
  const { customerId } = req.myAccount;

  const result = await ServiceTransactions.transfers(customerId, value, to);

  res.status(200).json(result);
};

module.exports = {
  deposits,
  transfers,
};
