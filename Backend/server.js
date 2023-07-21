// @ts-nocheck
const express = require('express')
const app=express()
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const bodyParser = require('body-parser');


app.use(morgan('dev'))


app.use(bodyParser.json({extended:true}));      
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,authentication-token,application/json,charset=utf-8"); 
    next();
})


dotenv.config()
require('./routes/userRoute')(app)
require('./routes/transectionRoutes')(app)
require('./config/db')




const PORT = 7405 || Process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server listening on Port ${PORT}`);
})
