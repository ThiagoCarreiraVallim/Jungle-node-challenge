const router = require('express').Router();
const rescue = require('express-rescue');

const authAdmin = require('../../middlewares/authAdmin');
const authMiddleware = require('../../middlewares/authMiddleware');
const upload = require('../../utils/multerHandler');
const authorController = require('../author/authorController');
const articleController = require('../articles/articlesController');

router.use(rescue(authMiddleware));

router.use(rescue(authAdmin));

/* eslint-disable */
router.post('/authors/', upload.single('image'), rescue(authorController.create));

router.get('/authors/', rescue(authorController.getAll));

router.get('/authors/:id', rescue(authorController.getById));

router.put('/authors/:id', upload.single('image'), rescue(authorController.updateById));

router.delete('/authors/:id', rescue(authorController.deleteById));

router.post('/articles', rescue(articleController.create));

router.get('/articles', rescue(articleController.getAll));

router.get('/articles/:id', rescue(articleController.getById));

router.put('/articles/:id', rescue(articleController.updateById));

router.delete('/articles/:id', rescue(articleController.deleteById));

/* eslint-enable */

module.exports = router;
