const articleService = require('./articlesServices');

const create = async (req, res) => {
  const article = req.body;

  const response = await articleService.create(article);

  res.status(response.status).json(response.data);
};

const getAll = async (req, res) => {
  const response = await articleService.getAll();

  res.status(response.status).json(response.data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const response = await articleService.getById(id);

  res.status(response.status).json(response.data);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const article = req.body;

  const response = await articleService.updateById(id, article);

  res.status(response.status).json(response.data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const response = await articleService.deleteById(id);

  res.status(response.status).end();
};

const getByQuery = async (req, res) => {
  const { query } = req;
  const { user } = req;

  const response = await articleService.getByCategory(query, user);

  res.status(response.status).json(response.data);
};

const getFormatedArticle = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const response = await articleService.getFormatedArticleById(id, user);

  res.status(response.status).json(response.data);
};

module.exports = {
  getFormatedArticle,
  getByQuery,
  deleteById,
  updateById,
  getById,
  getAll,
  create,
};
