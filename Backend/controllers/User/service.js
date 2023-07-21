const userModel =require('../../models/userModel')

const saveUserDetails = async(data)=>{

       
        const values=new userModel(data)
        const models =await values.save()
        return models
    
 

}

const getuser = async(data)=>{
  
    try{

      let response
        
        if (data.Email) {
            response =await userModel.aggregate([
                {$match:{Email:data.Email}}
            ]);
        } 
        
        return response
    }

    catch (err) {
        return false
    }
    
}

module.exports={
    saveUserDetails,
    getuser
}