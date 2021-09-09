const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (_req, _file, callback) => {
    const timestamp = Date.now();
    callback(null, `${timestamp}.jpeg`);
  },
});

const upload = multer({ storage });

module.exports = upload;
