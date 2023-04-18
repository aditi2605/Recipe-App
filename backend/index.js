const express = require('express');
const cors = require('cors');
require('dotenv/config');
const PORT = process.env.PORT;
require('./db/conn');


const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./Router/auth.js'))




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
