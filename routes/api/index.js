const router = require('express').Router();

// const userRoutes = require('./user-routes.js');

// router.use('/users', userRoutes);
router.use('/users/:name', (req, res) => {
    const greeting = "Hello, " + req.params.name + "!"
    res.send(greeting)
});

router.use('/users', (req, res) => {
    res.send("test")
});

router.use('/comments', (req, res) => {
    res.send("this is the comments route")
});

module.exports = router;