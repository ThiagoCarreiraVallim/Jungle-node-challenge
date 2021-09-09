const knex = require('knex');
const { Model } = require('objection');
const knexFile = require('./knexfile');

const dbConfig = () => {
  const db = knex(knexFile.development);
  Model.knex(db);
};

module.exports = dbConfig;
