const express = require('express');
const Routes = require('./Routes');
require('dotenv').config();
const middlewareError = require('./controllers/Middlewares/MiddlewareError');

const app = express();

app.use(express.json());

app.use('/', Routes);

app.use(middlewareError);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(PORT));
