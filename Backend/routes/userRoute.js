const express = require('express');
const router =express.Router();
const auth = require("./../config/auth");

const userDetail = require('../controllers/User/index')

let routes= (app) => {
      router.post('/userdetail',userDetail.userdatas)

      router.post('/getdetail',userDetail.userlist)
      app.use('/api/users',router)   
      
};
module.exports = routes