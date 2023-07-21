const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    Name:{
        type: String,
        required: true
    },

    Email:{
        type: String,
        required: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true
    },
    role: String,
    createdAt: String,
    updatedAt: String,
    
    isDeleted:{
        type:Boolean
    }

})

const userModel = mongoose.model("users",userSchema)
module.exports=userModel