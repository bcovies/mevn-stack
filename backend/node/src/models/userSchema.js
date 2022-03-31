const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email:String,
    password:String,
    DoB:String,
    name:String,
    phone:String
},{colections:'users'});

const Users = mongoose.model("Users",userSchema);

module.exports = Users;