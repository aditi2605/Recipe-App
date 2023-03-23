const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('../db/conn');   
const User = require('../model/userSchema');
const UserLogin = require('../model/loginSchema');
const UserSignUp = require('../model/signupSchema');


//homePage route
// router.get('/', (req, res) => {
//     res.send('hello world from auth js router')
//     // console.log('authjs')
// });

// LoginPage Route
router.get("/login", (req, res) => {
    res.send({message: req.body});
    console.log('loginpage')
})
router.post("/login", async (req, res) => {
    //new
    try {
        console.log(req.body);
        const { user_name, user_email, user_password, user_ConfirmPassword} = req.body;

        if(!user_name || !user_email || !user_password || !user_ConfirmPassword) {
            res.status(422).json({ err: "Please fill all the fields"});
        }

        const loginUserExist = await UserLogin.findOne({ user_email: user_email });

        if(loginUserExist) {
            res.status(422).json({message: "user already exist please Signup"});
        }else {
            const newLoginUser = new UserLogin({
                user_name, user_email, user_password, user_ConfirmPassword
            });
            console.log("Created a new user");
            console.log(newLoginUser);
            const profile = await newLoginUser.save();

            if(profile) {
                console.log("Inside signup profile");
                return res.status(201).json({ message: "Login successfully" });
                
            } else {
                console.log("Inside else login block");
                return res.status(500).json({err: "faild to login a profile"})
                
        }
        }

    }catch (error) {
        console.log(error);
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



//SignUpPage Route
router.get('/signup', (req, res) => {
    res.send({message: "signup page"})
})
router.post('/signup', async (req, res, next) => {
    try {
        // Get user input
        const { user_email, user_password } = req.body;
            // Validate user input
            if( !user_email || !user_password ) {
                return res.status(400).json({ message: "Please fill all the field"})
            }
            // Validate if user exist in our database
            const userMail = await UserLogin.findOne({ user_email });
            console.log(userMail);

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
                return res.status(200).json(userMail);
                }

                return res.status(400).send("Invalid Credentials");



                // const checkPassword = await bcrypt.compare(user_password, UserLogin.user_ConfirmPassword);
        
                //  const token = await userMail.generateAuthToken();
                //  console.log(token);

                //  res.cookie('jwtoken', token, {
                //     expires: new Date(Date.now() 
                //     + 23892000000),
                //     httpOnly: true
                //  });

                // if(checkPassword) {
                //     res.status(200).json({message: "Authentication Successfully"});
                // }else {
                //     res.status(422).json({error: "Wrong username or password "});
                // }
            // }else {
            //     res.send("invalid username");
            // }
    }catch (err){
        console.log(err);
        res.status(500).json({err: "Internal Server error Occured"});
    }   
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