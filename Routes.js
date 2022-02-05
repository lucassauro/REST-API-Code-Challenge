const express = require('express');
// Middlewares
const generateCPF = require('./controllers/ControllerCPFGenerator');
const passwordHash = require('./controllers/Middlewares/MiddlewareHash');
const validateCPF = require('./controllers/Middlewares/MiddlewareCPF');
const validatePW = require('./controllers/Middlewares/MiddlewarePW');
const validateNames = require('./controllers/Middlewares/MiddlewareName');
const validateValue = require('./controllers/Middlewares/MiddlewareValue');
const validateAccountNumber = require('./controllers/Middlewares/MiddlewareAccount');
const auth = require('./controllers/Middlewares/MiddlewareAuth');
// controllers
const ControllerSignup = require('./controllers/ControllerSignup');
const ControllerLogin = require('./controllers/ControllerLogin');
const ControllerTransactions = require('./controllers/ControllerTransactions');

const router = express.Router();

// for development purpose only;
router.get('/cpf-generator', generateCPF);

router.post('/signup', [
  validateCPF,
  validateNames,
  validatePW,
  passwordHash,
  ControllerSignup.signup,
]);

router.post('/login', [
  validateCPF,
  validatePW,
  passwordHash,
  ControllerLogin.login,
]);

router.get('/me', [
  auth,
  (req, res) => res.json(req.me),
]);

router.get('/me/account', [
  auth,
  (req, res) => res.json(req.myAccount),
]);

router.post('/me/deposit', [
  validateValue,
  auth,
  ControllerTransactions.deposits,
]);

router.post('/me/transfer', [
  validateValue,
  validateAccountNumber,
  auth,
  ControllerTransactions.transfers,
]);

module.exports = router;
