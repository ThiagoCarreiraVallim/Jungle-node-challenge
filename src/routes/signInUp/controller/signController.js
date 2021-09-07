const signServices = require('../services/signServices');

const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await signServices.login({ email, password });

  res.status(response.status).json({ token: response.token })
}

const singUp = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  const response = await signServices.signUp({ name, email, password, role });

  res.status(response.status).json({ token: response.token });
};

module.exports = {
  singUp,
  login
};
