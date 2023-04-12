const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


require('../db/conn');

const CreateRecipe = require('../model/userCreatedRecipeSchema');
const UserLogin = require('../model/loginSchema');
const UserSignup = require('../model/signupSchema');


// SignupPage Route

router.post("/signup", async (req, res) => {
    //new
    try {
        const { user_name, user_email, user_password, user_ConfirmPassword} = req.body;
        console.log(req.body);

        // if(!user_name || !user_email || !user_password || !user_ConfirmPassword) {
        //     res.status(422).json({ err: "Please fill all the fields"});
        // }
        // else if (user_password != user_ConfirmPassword) {
        //     return res.status(400).send("Invalid Credentials");
        // }

        const UserExist = await UserSignup.findOne({ user_name, user_email});

        if(!UserExist) {
            const newUser = new UserSignup({
                user_name, user_email, user_password, user_ConfirmPassword
            });
            console.log("Created a new user");
            console.log(newUser);
            const profile = await newUser.save();

            if(profile) {
                console.log("Inside signup profile");
                return res.status(201).json({ message: "signup successfully" });
                
            } else {
                console.log("Inside else signup block");
                return res.status(500).json({err: "faild to signup a profile"})    
            }
           
        }else {
            res.status(422).json({message: "user already exist please login"});
        }

    }catch (error) {
        console.log(error);
    }    
});



//LoginPage Route
router.post('/login', async (req, res) => {
    try {
        // Get user input
        const { user_email, user_password } = req.body;
            // Validate if user exist in our database
            const userMail = await UserSignup.findOne({ user_email });
            console.log(userMail)
            
            if(userMail && (await bcrypt.compare(user_password, userMail.user_password))) {
                // Create token  
                const token = jwt.sign(
                    { _id: userMail._id },
                    process.env.TOKEN_KEY,
                    {
                    expiresIn: "2h"
                    }
                );
                // save user token
                userMail.token = token;
                
                // user
                console.log(userMail)
                return res.status(201).json({MESSAGE: "Login successfully"});
                }

                return res.status(400).json({error: "Invalid Password"});
                console.log("Invalid Password")


                // if (!userMail) {
                //     console.log(userMail);
                //     return res.status(404).json({err: "user not found"})
                // } 

    }catch (err){
        console.log(err);
    }   
});

// GET ALL RECIPES
router.get('/dashboard', async(req, res)=> {

    const {user_mail, recipe_title, recipe_image, recipe_ingridients } = req.body;

    console.log(req.body);

    let recipes ;
    try{
       recipes= await CreateRecipe.find();
        
    }catch(err){
        res.status(404).json({err: "Recipe's not found"})
        console.log(err)
    }

    if(!recipes) {
        return res.status(404).json({message: "Recipe's not found"})
    }else {
        console.log(recipes);
        return res.status(200).json({ recipes });  
    }
});

// ADD NEW RECIPE
router.post('/createrecipe', async (req, res) => {

    console.log(req.body);
    const {  user_email, recipe_title, recipe_image, recipe_ingridients } = req.body;

    let addRecipe;

    try {
        addRecipe = new CreateRecipe({ 
                        user_email,
                        recipe_title, 
                        recipe_image, 
                        recipe_ingridients
                    });
                    await addRecipe.save();
                    console.log(addRecipe);

                    if(!addRecipe) {
                        return res.status(500).json({message: "Unable to add a recipe"});
                    }else {
                        return res.status(201).json({ addRecipe });
                    }
    }catch (err) {
        console.log(err);
    }
});






// Edit Recipe 
// router.get('/:id', async (req, res) => {
//     console.log(req.params.id)
//     try {
//         const user = await UserRecipe.findById(req.params.id)
//         res.status(201).json(user);
//             console.log(user)

//     }catch(e) {
//         res.status(404).json({e : "recipe not found"})
//         console.log(e)
//     }
// })


 






module.exports = router;