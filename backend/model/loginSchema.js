const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");


const userLoginSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required:true
    },
    user_password: {
        type: String,
        required:true
    },
    user_ConfirmPassword: {
        type: String,
        required:true
    }
});

const UserLogin = mongoose.model('USELOGIN', userLoginSchema);

module.exports = UserLogin;