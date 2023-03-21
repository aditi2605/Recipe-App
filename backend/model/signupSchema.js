const mongoose = require("mongoose");

const userSignUpSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required:true
    },
    user_password: {
        type: String,
        required:true
    }
    
});


const UserSignUp = mongoose.model('USERSIGNUP', userSignUpSchema);

module.exports = UserSignUp;