const router = require('express').Router();
const rescue = require('express-rescue');

const authAdmin = require('../../middleware/authAdmin');
const authMiddleware = require('../../middleware/authMiddleware');

const authorController = require('./controller/authorController');

router.use(rescue(authMiddleware));

router.use(rescue(authAdmin));

router.post('/', upload.single('image'), rescue(authorController.create));

router.get('/', rescue(authorController.getAll));

router.get('/:id', rescue(authorController.getById));

router.put('/:id', upload.single('image'), rescue(authorController.updateById));

router.delete('/:id', rescue(authorController.deleteById));

module.exports = router;
