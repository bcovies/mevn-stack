//global imports
const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();
const conn = require('../controllers/dbConn');

router.get('/', (req, res) => {
    res.send('Hello, User!');
});
  
router.post('/signup', (req,res) => {
    const data = new User({
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone 
    });
    data.save();
    res.send(`User registred: ${data}`);
});


module.exports = router;