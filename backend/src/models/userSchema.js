//GLOBAL IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    dbo: {
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

const Users = mongoose.model("Users",userSchema);

module.exports = Users;