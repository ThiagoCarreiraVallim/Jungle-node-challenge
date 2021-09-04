
exports.up = (knex) => {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('name', 100).notNullable();
    table.string('picture').notNullable();

    table.timestamps(true, true);
  });  
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('authors');
};
