const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();


const userLoginSchema = new mongoose.Schema({
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
userLoginSchema.pre('save', async function ( next ) {
    console.log('inside password hash')
    if(this.isModified ('user_password')) {
        this.user_password = await bcrypt.hash(this.user_password, 12);
        this.user_ConfirmPassword = await bcrypt.hash(this.user_ConfirmPassword, 12);
    }
    next();
//create token
userLoginSchema.methods.generateAuthToken =  async function () {
    try {
        const token = jwt.sign({ _id: this_id }, process.env.SECRET_KEY);
        this.jwt_tokens = this.jwt_tokens.concat({ token });
        await this.jwt_token.save();
        return token;
    }catch (err) {
        console.log(err)
    }
}

});

const UserLogin = mongoose.model('USELOGIN', userLoginSchema);

module.exports = UserLogin;