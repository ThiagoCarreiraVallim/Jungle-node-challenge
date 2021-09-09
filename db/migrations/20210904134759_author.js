exports.up = (knex) => knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('name', 100).notNullable();
    table.string('picture').notNullable();
  });

exports.down = (knex) => knex.schema.dropTableIfExists('authors');
