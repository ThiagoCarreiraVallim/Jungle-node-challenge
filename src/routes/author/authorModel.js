const Author = require('../../../db/models/author');

const getAuthors = () => Author.query();

const insertAuthor = (author) => Author.query().insert(author);

const getAuthorById = (id) => Author.query().findById(id);

const updateAuthorById = (id, author) => Author.query().patchAndFetchById(id, author);

const deleteAuthorById = (id) => Author.query().deleteById(id);

module.exports = {
  deleteAuthorById,
  updateAuthorById,
  getAuthorById,
  insertAuthor,
  getAuthors,
};
