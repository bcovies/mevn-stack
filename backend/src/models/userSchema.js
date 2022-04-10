//GLOBAL IMPORTS
const mongoose = require('../database/mongooseConnection');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    dob: {
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},{colections:'users'});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 1);
    this.password = hash;
    next();
});

const Users = mongoose.model("Users",userSchema);

module.exports = Users;