// module 18
const router = require('express').Router();
// const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

const userRoutes = require('./api/user-routes');
module.exports = router;
