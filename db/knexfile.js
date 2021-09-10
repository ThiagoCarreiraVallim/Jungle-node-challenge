const { knexSnakeCaseMappers } = require('objection');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {

  development: {

    client: 'postgresql',

    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: 'knex_migrations',
    },

    seeds: {
      directory: './seeders',
    },

    ...knexSnakeCaseMappers,
  },

  production: {

    client: 'postgresql',

    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: 'knex_migrations',
    },

    seeds: {
      directory: './seeders',
    },

    ...knexSnakeCaseMappers,
  },

};
