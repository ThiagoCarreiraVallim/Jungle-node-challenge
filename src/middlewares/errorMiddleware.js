const handler = require('../utils/errorHandler');

const errorMiddleware = (err, _req, res, _next) => {
  if (err.handleError) {
    res
      .status(handler[err.error].code)
      .json({ message: handler[err.error].message });
  } else if (err.details) {
    res.status(400).json({ message: err.details[0].message });
  } else {
    res.status(500).json(err);
  }
};

module.exports = errorMiddleware;
