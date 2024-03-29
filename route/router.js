const express = require('express')
 const router = express.Router()
const fileChecker = require('../Custom Middleware/customMiddle');
const filesController=require('../Controler/controller')



 router.post('/',fileChecker,filesController)




    module.exports=router;