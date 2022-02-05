const ServiceTransactions = require('../services/ServiceTransactions');

const deposits = async (req, res, next) => {
  const { value } = req.headers;
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
  const { value, to } = req.headers;
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
