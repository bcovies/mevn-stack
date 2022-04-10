const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/login', (req,res) => {
    res.send ({ ok: true, userID: req.userId });
});

module.exports = app => app.use('/auth', router);