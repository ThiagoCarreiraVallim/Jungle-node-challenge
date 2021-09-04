const knex = require('knex');
const knexFile = require('./knexfile');
const { Model } = require('objection');

const dbConfig = () => {
  const db = knex(knexFile.development);
  Model.knex(db);
}

module.exports = dbConfig;
