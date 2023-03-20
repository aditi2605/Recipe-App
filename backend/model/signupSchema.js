const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSignUpSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_ConfirmPassword: {
        type: String,
        required: true
    }
})

// Password Hashing

userSignUpSchema.pre('save', async function ( next ) {
    console.log('inside password hash')
    if(this.isModified ('user_password')) {
        this.user_password = await bcrypt.hash(this.user_password, 12);
        this.user_ConfirmPassword = await bcrypt.hash(this.user_ConfirmPassword, 12);
    }
    next();
    
});


const UserSignUp = mongoose.model('USERSIGNUP', userSignUpSchema);

module.exports = UserSignUp;