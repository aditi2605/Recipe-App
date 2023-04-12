const mongoose = require('mongoose');
require('dotenv/config');

// DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true })

.then (() => {
    console.log('DB connected')
})
.catch( (e) => {
  console.log(e)
})