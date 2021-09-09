const Joi = require('joi');

const COLUMNS = ['category', 'title', 'summary', 'firstParagraph', 'body', 'authorId'];

const schema = Joi.object({
  authorId: Joi.number().required(),
  category: Joi.string().max(100).required(),
  title: Joi.string().min(6).max(100).required(),
  summary: Joi.string().max(255).required(),
  firstParagraph: Joi.string().required(),
  body: Joi.string().required(),
});

const validate = (article) => schema.validateAsync(article);

const schemaUpdate = Joi.object({
  authorId: Joi.number(),
  category: Joi.string().max(100),
  title: Joi.string().min(6).max(100),
  summary: Joi.string().max(255),
  firstParagraph: Joi.string(),
  body: Joi.string(),
});

const update = (article) => schemaUpdate.validateAsync(article);

const schemaQuery = Joi.object({
  category: Joi.string().max(100).required(),
});

const validateQuery = (query) => schemaQuery.validateAsync(query);

const formatArticle = (article, user) => {
  delete article.authors.id;
  
  if (!user) delete article.body;

  return article;
};

const formatArticles = (articles, user) => articles.map((article) => formatArticle(article, user));

module.exports = {
  formatArticles,
  formatArticle,
  validateQuery,
  validate,
  COLUMNS,
  update,
};
