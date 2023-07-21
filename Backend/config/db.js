// @ts-nocheck
const mongoose = require('mongoose')
const dbURL ='mongodb://127.0.0.1:27017/ExpenseManage'

mongoose.connect(dbURL,{
    
})

mongoose.connection.on('connected' , () =>{
    console.log(`Mongoose Connected`);
})
mongoose.connection.on('Disconnected' , () =>{
    console.log(`Mongoose Disconnected`);
})
 