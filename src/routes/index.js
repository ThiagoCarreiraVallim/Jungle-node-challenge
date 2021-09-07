const router = require('express').Router();

const singInUpRoute = require('./signInUp/index');
const authorRoute = require('./author/index');
const imageRoute = require('./image/index');
const errorMiddleware = require('../middleware/errorMiddleware');

router.use(singInUpRoute);

router.use('/image', imageRoute);

router.use('/admin/authors', authorRoute);

router.use(errorMiddleware);

module.exports = router;
