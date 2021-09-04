const express = require('express');
const dbConfig = require('../db/db-config');

dbConfig();

const app = express()

app.get('*', (req,res) => {
  res.send('Hello World!')
})

module.exports = app;
