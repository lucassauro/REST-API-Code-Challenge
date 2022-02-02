const express = require('express');
// const ControllerSignup = require('./controllers/ControllerSignup');

const passwordHash = require('./controllers/Middlewares/MiddlewareHash');

const router = express.Router();

router.post('/signup', passwordHash);

module.exports = router;
