exports.up = (knex) => knex.schema.createTable('articles', (table) => {
    table.increments('id');
    table.integer('authorId').references('id').inTable('authors').notNullable();
    table.string('category', 100).notNullable();
    table.string('title', 100).notNullable();
    table.string('summary').notNullable();
    table.text('firstParagraph').notNullable();
    table.text('body').notNullable();

    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTableIfExists('articles');
