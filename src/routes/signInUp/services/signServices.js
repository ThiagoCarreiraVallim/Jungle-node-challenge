const UtilUser = require('../utils/user');
const Token = require('../../utils/token');
const UserModel = require('../models/signModel');

const formatUser = (user) => {
  user.password = UtilUser.crypto(user.password);
  user.role = user.role || 'user';
}

const login = async (user) => {
  await UtilUser.validate(user);

  const [dbUser] = await UserModel.GetUserByEmail(user.email);

  if (!dbUser) throw { error: 'notFoundEmail', handleError: true };

  if (UtilUser.crypto(user.password) !== dbUser.password) {
    throw { error: 'invalidPassword', handleError: true };

  } else {
    UtilUser.removePassword(dbUser);
    return { status: 200, token: Token.generate(dbUser) };

  }
}

const signUp = async (user) => {
  await UtilUser.validate(user);

  formatUser(user);
  
  const insertedUser = await UserModel.InsertUser(user);

  UtilUser.removePassword(insertedUser);

  return { status: 201, token: Token.generate(insertedUser) };
};

module.exports = {
  signUp,
  login,
}
