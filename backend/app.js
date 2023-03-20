const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;

require('./db/conn');
// import userschema
const User = require('./model/userSchema');


// collect the data into json formar
app.use(express.json());

// import routerfile auth.js to get the DB
app.use(require('./router/auth'))

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.post('/createrecipe', (req, res) => {
//     console.log(req.body);
//     res.json({message: req.body});
// })















app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
