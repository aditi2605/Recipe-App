const mongoose = require('mongoose');

const userCreatedRecipeSchema = new mongoose.Schema({
   
        user_email: {
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
        },

});


const CreateRecipe = mongoose.model('usercreatedrecipe', userCreatedRecipeSchema);

module.exports = CreateRecipe;