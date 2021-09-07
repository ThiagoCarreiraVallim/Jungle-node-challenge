const authAdmin = (req, _res, next) => {
  const { user } = req;

  if(!user || user.role !== 'admin') {
    throw { error: 'forbidden', handleError: true };
  }

  next();
};

module.exports = authAdmin;
