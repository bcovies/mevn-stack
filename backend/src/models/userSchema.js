//GLOBAL IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email:String,
    password:String,
    dbo:String,
    phone:String
},{colections:'users'});

const Users = mongoose.model("Users",userSchema);

module.exports = Users;