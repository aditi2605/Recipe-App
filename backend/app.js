const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const PORT = process.env.PORT;


require('./db/conn');

const UserLogin = require('./model/loginSchema');
const UserSignup = require('./model/signupSchema');
const CreateRecipe = require('./model/userCreatedRecipeSchema')


const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded( { extended: true}));
app.use(require('../backend/Router/auth.js'))





app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
