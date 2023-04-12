const mongoose = require("mongoose");

const userLoginSchema  = new mongoose.Schema({
    user_email: {
        type: String,
        unique: true,
        required:true
    },
    user_password: {
        type: String,
        required:true
    }
    
});

const UserLogin = mongoose.model('USERLOGIN', userLoginSchema);

module.exports = UserLogin;

