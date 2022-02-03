const express = require('express');
const generateCPF = require('./controllers/ControllerCPFGenerator');
const passwordHash = require('./controllers/Middlewares/MiddlewareHash');
const validateCPF = require('./controllers/Middlewares/MiddlewareCPF');
const validatePW = require('./controllers/Middlewares/MiddlewarePW');
const validateNames = require('./controllers/Middlewares/MiddlewareName');
const ControllerSignup = require('./controllers/ControllerSignup');

const router = express.Router();

// for development purpose;
router.get('/cpf-generator', generateCPF);

router.post('/signup', [
  validateCPF,
  validateNames,
  validatePW,
  passwordHash,
  ControllerSignup.signup,
]);

module.exports = router;
