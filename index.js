const express = require('express');
const Routes = require('./Routes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', Routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(PORT));
