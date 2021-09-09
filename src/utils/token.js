const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generate = (data) => jwt.sign({ ...data }, secret, jwtConfig);

const decrypted = (token) => jwt.verify(token, secret);

module.exports = {
  decrypted,
  generate,
};
