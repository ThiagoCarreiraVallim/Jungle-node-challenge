const router = require('express').Router();
const rescue = require('express-rescue');

const authMiddleware = require('../../middlewares/authMiddleware');
const articlesController = require('./articlesController');

router.use(rescue(authMiddleware));

router.get('/', rescue(articlesController.getByQuery));

router.get('/:id', rescue(articlesController.getFormatedArticle));

module.exports = router;
