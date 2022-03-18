const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const {readdirSync} = require("fs")
require('dotenv').config()

const app = express();

//db
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{console.log("DB connected")})
.catch((err)=> console.log("DB connection error: ", err))

//middlewares
app.use(express.json({limit: '5mb'}))

app.use(express.urlencoded({extended: true}));
app.use(cors({origin: ['http://localhost:3000']})
)

readdirSync('./routes').map((r)=>{ 
  app.use('/api', require(`./routes/${r}`))
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));