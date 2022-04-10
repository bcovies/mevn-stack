const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
  
router.post('/register', async (req,res) => {
    const { email, password, dob, phone } = req.body;
    if ( email || password || dob ||phone == '' ){
        if ( email == '' ) {
            return res.status(400).send({
                error: '(3) - Missing email'
            })
        }
        if ( password == '' ){
            return res.status(400).send({
                error: '(4) - Missing password'
            })
        }
        if ( dob == '' ){
            return res.status(400).send({
                error: '(5) - Missing day of birth'
            })
        }
        if ( phone == '' ){
            return res.status(400).send({
                error: '(6) - Missing phone'
            })
        }
    }
    try{
        if( await User.findOne({ email }) ){
            return res.status(400).send({ error: '(1) - User already registred!'});
        }
        const user = await User.create(req.body);
        user.password = undefined; 
        return res.status(200).send({ user });
    } catch (error) {
        return res.status(400).send({
            error: '(2) - Regstration failed!'
        });
    }
});

module.exports = app => app.use('/auth', router);