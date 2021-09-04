const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {

    client: 'postgresql',

    connection: {
      database: 'challenge',
      user:     'postgres',
      password: 'postgres'
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: './seeders',
    },

    ...knexSnakeCaseMappers
  },

  production: {

    client: 'postgresql',

    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: './seeders',
    },

    ...knexSnakeCaseMappers
  }

};
