const express = require('express');
const generateCPF = require('./controllers/ControllerCPFGenerator');
const passwordHash = require('./controllers/Middlewares/MiddlewareHash');
const validateCPF = require('./controllers/Middlewares/MiddlewareCPF');
const validatePW = require('./controllers/Middlewares/MiddlewarePW');
const validateNames = require('./controllers/Middlewares/MiddlewareName');
const auth = require('./controllers/Middlewares/MiddlewareAuth');
const ControllerSignup = require('./controllers/ControllerSignup');
const ControllerLogin = require('./controllers/ControllerLogin');

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

router.get('/me', auth, (req, res) => {
  res.json(req.auth);
});

router.get('/me/deposit');
router.get('/me/transfer');

module.exports = router;
