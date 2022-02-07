const ServiceTransactions = require('../services/ServiceTransactions');

const deposits = async (req, res, next) => {
  // For security reasons, SSL/TLS and https protocol should be used.
  // const { value } = req.headers;
  const { value } = req.body;
  const { customerId, accountNumber } = req.myAccount;

  try {
    const result = await ServiceTransactions.deposits(value, customerId, accountNumber);

    if (result.error || !result) return next(result);

    return res.status(200).json(result);
  } catch (e) {
    return next(e);
  }
};

const transfers = async (req, res, next) => {
  // For security reasons, SSL/TLS and https protocol should be used.
  // const { value, to } = req.headers;
  const { value, to } = req.body;
  const { customerId } = req.myAccount;

  try {
    const result = await ServiceTransactions.transfers(customerId, value, to);

    if (result.error || !result) return next(result);

    return res.status(200).json(result);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  deposits,
  transfers,
};
