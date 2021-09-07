const User = require('../../../../db/models/user');

const InsertUser = (user) => User.query().insert(user);

const GetUserById = (id) => User.query().findById(id);

const GetUserByEmail = (email) => User.query().where('email', email);


module.exports = {
  GetUserByEmail,
  GetUserById,
  InsertUser,
};
