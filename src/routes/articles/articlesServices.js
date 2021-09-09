const articleUtil = require('./utils/article');
const articlesModel = require('./articlesModel');
const author = require('../author/authorServices');
const Id = require('../../utils/id');

const create = async (article) => {
  await articleUtil.validate(article);
  await author.getById(article.authorId);
  
  const insertedArticle = await articlesModel.insertArticle(article);
  
  return { status: 201, data: insertedArticle };
};

const getAll = async () => {
  const articles = await articlesModel.getArticles();

  return { status: 200, data: articles };
};

const getById = async (id) => {
  await Id.validate(id);
  const article = await articlesModel.getCompleteArticleById(id);

  if (!article) throw { error: 'articleNotFound', handleError: true };

  return { status: 200, data: article };
};

const updateById = async (id, article) => {
  await articleUtil.update(article);
  await Id.validate(id);

  if (article.authorId) await author.getById(article.authorId);
  
  const updatedArticle = await articlesModel.updateArticleById(id, article);
  
  return { status: 200, data: updatedArticle };
};

const deleteById = async (id) => {
  await Id.validate(id);

  const article = await articlesModel.deleteArticleById(id);

  if (!article) throw { error: 'articleNotFound', handleError: true };

  return { status: 204 };
};

const getByCategory = async (query, user) => {
  await articleUtil.validateQuery(query);

  const articles = await articlesModel.queryCategory(query);

  const formatedArticles = articleUtil.formatArticles(articles, user);

  return { status: 200, data: formatedArticles };
};

const getFormatedArticleById = async (id, user) => {
  await Id.validate(id);
  
  const article = await articlesModel.getFormatedArticleById(id);

  if (!article) throw { error: 'articleNotFound', handleError: true };

  const formatedArticle = articleUtil.formatArticle(article, user);

  return { status: 200, data: formatedArticle };
};

module.exports = {
  getFormatedArticleById,
  getByCategory,
  deleteById,
  updateById,
  getById,
  create,
  getAll,
};
