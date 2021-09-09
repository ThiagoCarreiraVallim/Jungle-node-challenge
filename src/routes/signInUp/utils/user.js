const Joi = require('joi');
const CryptoJS = require('crypto-js');

const schema = Joi.object({
  name: Joi.string().min(10).max(100),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(30).required(),
});

const validate = ({ name, email, password }) => (
  schema.validateAsync({ name, email, password })
);

const crypto = (password) => CryptoJS.SHA256(password).toString();

const removePassword = (user) => delete user.password; 

module.exports = {
  removePassword,
  validate,
  crypto,
};
