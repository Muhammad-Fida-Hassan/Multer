const express=require('express')
const app=express()
const path=require('path')
const upload=require('./upload')


app.set('view engine', "ejs")
app.set("views", path.resolve('./Views'))

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.render("views")
})


app.post('/upload', upload.single('file'),(req, res) =>{
    console.log(req.file)
    if(req.file.mimetype.startsWith==='image'){
        res.json({message:'image is uploaded successfuly'})
    }else if(req.file.mimetype.startsWith==='video'){
        res.json({message:'video is uploaded successfuly'})
    }
    else{
        res.json('file is cracked')
    }
})
app.listen(5000,(req,res)=>[
    console.log('server is running on port 5000')
])