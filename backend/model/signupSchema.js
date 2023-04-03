const mongoose = require("mongoose");

const userSignupSchema  = new mongoose.Schema({
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

const UserSignup = mongoose.model('USERSIGNUP', userSignupSchema);

module.exports = UserSignup;

