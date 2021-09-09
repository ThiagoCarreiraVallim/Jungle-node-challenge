exports.up = (knex) => knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name', 100).notNullable();
    table.string('email', 64).notNullable().unique();
    table.string('password', 64).notNullable();
    table.string('role', 10).notNullable();
  });

exports.down = (knex) => knex.schema.dropTableIfExists('users');
