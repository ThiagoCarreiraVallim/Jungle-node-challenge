const { knexSnakeCaseMappers } = require('objection');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

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
