const express=require('express');
const port =5000;
const app=express();
const path =require('path')
const upload = require('./upload/multer'); 
const fileChecker=require('./Custom Middleware/customMiddle')
const filesRouter=require('./route/router');


app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    return res.render('view')
})
app.use('/upload',upload.any(),filesRouter,fileChecker)


app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
})