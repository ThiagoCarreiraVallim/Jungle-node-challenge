const authorUtil = require('./utils/author');
const AuthorModel = require('./authorModel');

const configAuthor = (author) => {
  author.picture = author.filename && `/api/image/${author.filename}`;
  delete author.filename;
};

const create = async (author) => {
  configAuthor(author);
  await authorUtil.validate(author);

  const insertedAuthor = await AuthorModel.insertAuthor(author);

  return { status: 201, data: insertedAuthor };
};

const getAll = async () => {
  const authors = await AuthorModel.getAuthors();

  return { status: 200, data: authors };
};

const getById = async (id) => {
  const author = await AuthorModel.getAuthorById(id);

  if (!author) throw { error: 'authorNotFound', handleError: true };

  return { status: 200, data: author };
};

const updateById = async (id, author) => {
  configAuthor(author);
  await authorUtil.update(author);

  const updatedAuthor = await AuthorModel.updateAuthorById(id, author);

  return { status: 201, data: updatedAuthor };
};

const deleteById = async (id) => {
  const response = await AuthorModel.deleteAuthorById(id);

  if (!response) throw { error: 'authorNotFound', handleError: true };

  return { status: 204 };
};

module.exports = {
  deleteById,
  updateById,
  getById,
  create,
  getAll,
};
