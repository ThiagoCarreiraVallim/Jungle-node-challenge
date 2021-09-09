const Joi = require('joi');

const schema = Joi.object({
  id: Joi.number().min(1).required(),
});

const validate = (id) => schema.validateAsync({ id });

module.exports = {
  validate,
};
