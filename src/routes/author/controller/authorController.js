const authorServices = require('../services/authorServices');

const create = async (req, res) => {
  const { filename } = req.file;
  const { name } = req.body;
  
  const response = await authorServices.create({ name, filename });

  res.status(response.status).json(response.data);
};

const getAll = async (_req, res) => {
  const response = await authorServices.getAll();

  res.status(response.status).json(response.data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const response = await authorServices.getById(id);

  res.status(response.status).json(response.data);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const file = req.file || {};
  const { name } = req.body;

  
  const response = await authorServices.updateById(id, { name, filename: file.filename });

  res.status(response.status).json(response.data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const response = await authorServices.deleteById(id);

  res.status(response.status).end();
};

module.exports = {
  deleteById,
  updateById,
  getById,
  getAll,
  create,
}
