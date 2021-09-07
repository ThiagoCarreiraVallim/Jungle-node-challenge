const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('../db/db-config');
const routes = require('./routes/index');

dbConfig();

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;
