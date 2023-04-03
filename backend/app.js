const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;

require('./db/conn');
// import userschema
const User = require('./model/userSchema');

// cors
app.use(cors());


// collect the data into json formar
app.use(express.json());

// import routerfile auth.js to get the DB
app.use(require('../backend/Router/auth'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get("/signup", (req, res) => {
    res.cookie("test", "codeGirl");
})
app.post("/signup", (req, res) => {
    res.cookie("test", "codeGirl");
    res.status(201).json({message: "signup successfull"})
})

app.post('/createrecipe', (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
})















app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
