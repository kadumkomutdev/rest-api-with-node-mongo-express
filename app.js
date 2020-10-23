const express = require('express');
const  Mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//middle ware
//we can use authentification also
// app.use('/post',()=>{
//     console.log('This is a middle ware running');
// })
app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./route/post'); 
app.use('/post',postRoute);

//Routes
app.get('/',(req,res)=>{
    res.send("we are at home");
});

//connect to db
Mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser : true},
    ()=>console.log('Connected to db')
);

//How do we start listening to the server
app.listen(3000);