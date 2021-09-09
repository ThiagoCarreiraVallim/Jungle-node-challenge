const router = require('express').Router();

const singInUpRoute = require('./signInUp/index');
const adminRoute = require('./admin/index');
const articleRoute = require('./articles/index');
const imageRoute = require('./image/index');
const errorMiddleware = require('../middlewares/errorMiddleware');

router.use(singInUpRoute);

router.use('/image', imageRoute);

router.use('/admin', adminRoute);

router.use('/articles', articleRoute);

router.use(errorMiddleware);

module.exports = router;
