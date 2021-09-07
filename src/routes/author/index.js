const router = require('express').Router();
const rescue = require('express-rescue');

const authorController = require('./controller/authorController');

router.post('/admin/authors', rescue(authorController.create));

module.exports = router;
