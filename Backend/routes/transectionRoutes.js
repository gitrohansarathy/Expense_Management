const express = require('express');
const Transection = require('../controllers/transectionCtrl');
const router =express.Router();


let routes= (app) => {

    router.post('/add-transection',Transection.addTransection)

    router.post('/get-transection',Transection.getAllTransection)

    router.post('/edit-transection',Transection.editTransection)

    router.post('/delete-transection',Transection.deleteTransection)
      
      app.use  ('/api/transections',router)
      
};
module.exports = routes