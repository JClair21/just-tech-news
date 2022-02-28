const router = require('express').Router();

const apiRoutes = require('./api');

// router.use('/users', userRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;