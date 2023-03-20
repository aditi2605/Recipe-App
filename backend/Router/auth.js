const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

require('../db/conn');   
const User = require('../model/userSchema');
const UserLogin = require('../model/loginSchema');
const UserSignUp = require('../model/signupSchema');


//homePage route
// router.get('/', (req, res) => {
//     res.send('hello world from auth js router')
//     // console.log('authjs')
// });

//SignUpPage Route
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const { user_name, user_email, user_password, user_ConfirmPassword} = req.body;

        if(!user_name || !user_email || !user_password || !user_ConfirmPassword) {
            res.status(422).json({ err: "Please fill all the fields"});
        }

        const signupUserExist = await UserSignUp.findOne({ user_name: user_name || {user_email: user_email}});

        if(signupUserExist) {
            res.status(422).json({message: "user already exist please login"});
        }else {
            const newSignupUser = new UserSignUp({
                user_name, user_email, user_password, user_ConfirmPassword
            });
            console.log("Created a new user");
            console.log(newSignupUser);
            const profile = await newSignupUser.save();

            if(profile) {
                console.log("Inside signup profile");
                return res.status(201).json({ message: "signup successfully" });
                
            } else {
                console.log("Inside else signup block");
                return res.status(500).json({err: "faild to signup a profile"})
                
        }
        }

    }catch (error) {
        console.log(error);
    }
});

// LoginPage Route
router.get("/login", (req, res) => {
    res.send({message: req.body});
    console.log('loginpage')
})
router.post("/login", async (req, res) => {
    //new
    try {
        const { user_email, user_password, user_ConfirmPassword } = req.body;

            if( !user_email || !user_password || !user_ConfirmPassword) {
                return res.status(400).json({ message: "Please fill all the field"})
            }

            const userAlreadyExist = await UserSignUp.findOne({ user_email: user_email});

            const isMatch = await (user_password == user_ConfirmPassword);

            if(!isMatch) {
                res.status(422).json({ error: "password does not match, please signup"});
            }else {
                res.status(200).json({message: "login successfully"})
            }
    }catch (err){
        console.log(err);
    }



    // old code
        // try {
        //     const { user_email, user_password, user_ConfirmPassword } = req.body;

        //     if( !user_email || !user_password || !user_ConfirmPassword) {
        //         return res.status(400).json({ message: "Please fill all the field"})
        //     }

        //     const userAlreadyExist = await UserSignUp.findOne({ user_email: user_email });

        //     console.log(userAlreadyExist);

        //     if (userAlreadyExist) {
        //         res.status(400).json({error: "email does not exist, please signup"})
        //     }else {
        //         const newLoginUser = new UserLogin({
        //             user_email, user_password, user_ConfirmPassword
        //         });
        //         console.log("Created a new userlogin");
        //         console.log(newLoginUser);
        //         const loginProfile = await newLoginUser.save();

        //         if(loginProfile) {
        //             console.log("Inside login profile");
        //             return res.status(201).json({ message: "login successfully" });
                    
        //         } else {
        //             console.log("Inside else login block");
        //             return res.status(500).json({err: "faild to login a profile"});                   
        //         }
        //     }
        // }catch (err) {
        //     console.log(err);
        // }
});


// CreateRecipe Route

router.get('/createrecipe', (req, res) => {
    const { user_name, recipe_title, recipe_image, recipe_ingridients } = req.body;

    res.send({message: req.body});
    // console.log('wohooo')
})

router.post('/createrecipe', async (req, res) => {
   
    try {
        const { user_name, recipe_title, recipe_image, recipe_ingridients } = req.body;

        const userExist = await User.findOne({ user_name : user_name || {recipe_title: recipe_title }});

        if (userExist) {
            console.log("recipe already exist");
            return res.status(422).json({message: 'recipe already exist, login to update the existing recipe'})
            
        }
        else  {
                const user = new User({ user_name, recipe_title, recipe_image, recipe_ingridients });
                console.log("Created a new user");
                console.log(user);
                const result = await user.save();

                if(result) {
                    console.log("Inside result block");
                    return res.status(201).json({ message: "you have submitted youe recipe successfully, thank you" });
                    
                } else {
                    console.log("Inside else result block");
                    return res.status(500).json({err: "faild to submit"})
                    
            }
            }

    }catch (err) {
        console.log(err);
    }

    const { user_name, recipe_title, recipe_image, recipe_ingridients } = req.body;

    if (!user_name || !recipe_title  || !recipe_image  || !recipe_ingridients ) {
        console.log('Please fill all the fields')
        res.status(422).json({ error: 'Please fill all the fields'});
    }
    else{
        res.json({message: req.body});          
    }
   

});




module.exports = router;