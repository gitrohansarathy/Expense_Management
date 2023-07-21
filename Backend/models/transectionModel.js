
const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {

    userid:{
      type:String,
     
    },

    Amount: {
      type: Number,
      
    },

    type:{
          type:String,
         
    },

    Category: {
      type: String,
     
    },

    Reference: {
      type: String,
     
    },

    Description: {
      type: String,
     
    },

    Date: {
      type: Date,
     
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;