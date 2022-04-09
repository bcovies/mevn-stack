const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
  
router.post('/register', async (req,res) => {
    const { email } = req.body;
    try{
        if( await User.findOne({ email })){
            return res.status(400).send({ error: 'User already registred'});
        }
        const user = await User.create(req.body);
        user.password = undefined; 
        return res.status(200).send({ user });
    } catch (error) {
        return res.status(400).send({
            error: 'Regstration failed'
        });
    }
});

module.exports = app => app.use('/auth', router);