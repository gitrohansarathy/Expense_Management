// @ts-nocheck

const transectionModel = require("../models/transectionModel");
const moment = require("moment");

const getAllTransection = async (req, res) => {
  console.log(req.body);
  try {
    const frequency = req.body.frequency;
    const selectedDate=req.body.selectedDate
    const type=req.body.type

    const transection = await transectionModel.find({
      
      ...(frequency !== "Custom"
        ? {
            Date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            Date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
               },
          }),

      userid: req.body.userid,
      ...(type !=="all" && {type}),
   });
    console.log(transection);
    res.send({ code: 200, result: transection });
  } catch (error) {
    console.log(error);
    res.send({ code: 404, message: "Something Went Wrong" });
  }
};

const addTransection = async (req, res) => {
  try {
    // req.body.userid=v4();
    console.log(req.body);
    const newTransection = new transectionModel(req.body);

    console.log(newTransection);

    await newTransection.save();

    res.send({
      code: 200,
      message: "Transection Created",
    });
  } catch (error) {
    console.log(error);

    res.send({
      code: 404,
      message: "Something Went Wrong",
    });
  }
};

const editTransection = async (req,res) =>{
     try {
       await transectionModel.findOneAndUpdate(
       {_id: req.body.transactionId},
       req.body.payload
       );
       res.send({code:200,message:"Successfully Edit"})
     } catch (error) {
       console.log(error);
       res.send({code:400,message:" something error "})
     }
}

const deleteTransection = async (req,res) =>{
  try {
    await transectionModel.findOneAndDelete(
    {_id: req.body.transactionId});
    
    res.send({code:200,message:"Successfully Deleted"})
  } catch (error) {
    console.log(error);
    res.send({code:400,message:" something error "})
  }
}

module.exports = { getAllTransection, addTransection, editTransection,deleteTransection }; 




