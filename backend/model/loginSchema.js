const mongoose = require("mongoose");

const userLoginSchema  = new mongoose.Schema({
    user_email: {
        type: String,
        required:true
    },
    user_password: {
        type: String,
        required:true
    }
    
});

const UserLogin = mongoose.model('USELOGIN', userLoginSchema);

module.exports = UserLogin;

