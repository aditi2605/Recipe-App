const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();


const userSignupSchema = new mongoose.Schema({
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
    },
    jwt_tokens: [
        {
        token: {
            type: String,
            required:true
        }
      }
    ]
})

// Password Hashing
userSignupSchema.pre('save', async function ( next ) {
    console.log('inside password hash')
    if(this.isModified ('user_password')) {
        this.user_password = await bcrypt.hash(this.user_password, 12);
        this.user_ConfirmPassword = await bcrypt.hash(this.user_ConfirmPassword, 12);
    }
    next();
//create token
userSignupSchema.methods.generateAuthToken =  async function () {
    try {
        const token = jwt.sign({ _id: _id}, process.env.TOKEN_KEY);
        console.log(token);
        this.jwt_tokens = this.jwt_tokens.concat({ token: token });
        await this.jwt_tokens.save();
        console.log(token);
        return token;
    }catch (err) {
        console.log(err)
    }
}

});

const UserSignup = mongoose.model('USERSIGNUP', userSignupSchema );

module.exports = UserSignup;



