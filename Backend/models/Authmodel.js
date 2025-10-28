const mongoose = require('mongoose');

const AuthModel = new mongoose.Schema({
    email:String,
    password:String
});

const User = mongoose.model('users',AuthModel);

module.exports = User;


//  application/json


// multipart/form-data