const Article = require('../../../db/models/article');
const { COLUMNS } = require('./utils/article');

const getArticles = () => Article.query()
  .withGraphFetched('authors');

const insertArticle = (author) => Article.query()
  .insert(author)
  .withGraphFetched('authors');

const getCompleteArticleById = (id) => Article.query()
  .findById(id)
  .withGraphFetched('authors');

const updateArticleById = (id, author) => Article.query()
  .patchAndFetchById(id, author)
  .withGraphFetched('authors');

const deleteArticleById = (id) => Article.query()
  .deleteById(id)
  .withGraphFetched('authors');

const queryCategory = ({ category }) => Article.query()
  .select(...COLUMNS)
  .where('category', category)
  .withGraphFetched('authors');

const getFormatedArticleById = (id) => Article.query()
  .select(...COLUMNS)
  .findById(id)
  .withGraphFetched('authors');

module.exports = {
  getFormatedArticleById,
  getCompleteArticleById,
  deleteArticleById,
  updateArticleById,
  insertArticle,
  queryCategory,
  getArticles,
};
