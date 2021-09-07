const router = require('express').Router();

const singInUpRoute = require('./signInUp/index');
const authorRoute = require('./author/index');
const errorMiddleware = require('./middleware/errorMiddleware');

router.use(singInUpRoute);

router.use(authorRoute);

router.use(errorMiddleware);

module.exports = router;
