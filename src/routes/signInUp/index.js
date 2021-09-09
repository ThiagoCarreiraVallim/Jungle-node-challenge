const router = require('express').Router();
const rescue = require('express-rescue');

const signController = require('./signController');

router.post('/login', rescue(signController.login));

router.post('/sing-up', rescue(signController.singUp));

module.exports = router;
