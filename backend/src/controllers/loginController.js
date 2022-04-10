const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
  
router.post('/login', async (req,res) => {
    try{

    }catch (error){

    }
});

module.exports = app => app.use('/auth', router);