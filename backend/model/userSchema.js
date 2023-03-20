const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required:true
    },
    recipe_title: {
        type: String,
        required:true
    },
    recipe_image: {
        type: String,
        required:true
    },
    recipe_ingridients: {
    type: String,
    required:true
    },
    created_date: {
        type : Date, 
        default: Date.now
    }
});


const User = mongoose.model('USERRECIPE', userSchema);

module.exports = User;