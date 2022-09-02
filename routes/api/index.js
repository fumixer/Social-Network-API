const router = require ('express').Router();
// const thoughtRoutes = require ('./thought-routes');
const userRoutes = require ('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// router.use('thought', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
