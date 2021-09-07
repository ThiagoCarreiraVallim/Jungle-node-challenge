const User = require('../../../../db/models/user');

const insertUser = (user) => User.query().insert(user);

const getUserById = (id) => User.query().findById(id);

const getUserByEmail = (email) => User.query().where('email', email);


module.exports = {
  getUserByEmail,
  getUserById,
  insertUser,
};
