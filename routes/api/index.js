const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const { model } = require('../../models/User');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);




model.exports = router;