const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(10).max(100).required(),
  picture: Joi.string().required(),
});

const validate = ({ name, picture }) => schema.validateAsync({ name, picture });

const schemaUpdate = Joi.object({
  name: Joi.string().min(10).max(100),
  picture: Joi.string(),
});

const update = ({ name, picture }) => schemaUpdate.validateAsync({ name, picture });

module.exports = {
  validate,
  update,
};