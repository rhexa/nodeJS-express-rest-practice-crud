const router = require('express').Router();
const middleware = require('./middleware');

// middleware
router.use(middleware);

// movie
router.use('/movies', require('./movie'));

module.exports = router;