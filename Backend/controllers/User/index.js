// @ts-nocheck
const service = require('./service')
const moment = require("moment");
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken');


// const userdatas= async(req,res) =>{
// try {
//       const date = new Date()

//       req.body.createdAt = moment(date).format("MM-DD-YYYY HH:MM:SS")
//        const datas = await service.getuser(req.body)

//         if(req.body.Password){
//             const salt = await bcrypt.genSalt(10)
//             const hashedPassword = await bcrypt.hash(req.body.Password, salt)
//             req.body.Password = hashedPassword;
//         }
           
//            if(datas.length===0){
//             let response = await service.saveUserDetails(req.body)

//             res.send({
//                 code: 200,
//                 message:"User saved successfully",
//                 data: response})
//            }

//            else{
//             res.send({
//                code:202,
//                message: "Email  already exists!"})
//        } 


// } catch (error) {
//     console.log(error);
//     res.send({ status: 400, msg: 'Some Thing Went Wrong!'}); 
    
// }
// }

// const Userlist = async(req,res)=>{
//     try{
//         const list = await service.getuser(req.body)
//         console.log(list);
//         if(list.length==0){
//             res.send({
//                 code:203,
//                 message:"User not found"})
//         }else{
            
//              const match = await bcrypt.compare(req.body.Password,list[0].Password)
//              console.log(match);
           
//              if(match){
          
//                 const token = JWT.sign({emmit:list[0]},process.env.JWT_SECRET_KEY,{expiresIn:'5minutes'})
//                 res.send({code:200,Message:"Login Success",token:token})   
//              }else{
//                 res.send({
//                     code:204,
//                     message:"password is incorrect"
//                 })
                
//             }
//         }
//     }
//     catch (error) {
//         console.log(error)
//         res.send({
//             code: 400,
//             message: "Something went wrong"
//         })
//     }
// }

const userdatas = async(req,res) => {
    const response = await service.saveUserDetails(req.body)
    console.log(req.body);
    res.send({"code":200,"status":"success","Message":"Successfully saved"})
}

const userlist=async(req,res)=>{
    const list = await service.getuser(req.body)
    console.log(list);
    res.send({"code":200,"status":"success","result":list})
}



module.exports={
    userdatas,
    userlist
}
