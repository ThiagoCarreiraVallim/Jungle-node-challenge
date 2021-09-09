const UserModel = require('../routes/signInUp/signModel');
const { decrypted } = require('../utils/token');

const validateToken = async (token) => {
  try {
    const tokenData = decrypted(token);

    const userData = await UserModel.getUserById(tokenData.id);

    return userData;
  } catch (error) {
    throw { error: 'invalidToken', handleError: true };
  }
};

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const data = await validateToken(token);
    
    req.user = data;
  }

  next();
};

module.exports = authMiddleware;
