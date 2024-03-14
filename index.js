const express=require('express');

const app=express();
require('dotenv').config();
const PORT=process.env.PORT||8080;


// middleware
app.use(express.json());
const fileUpload=require('express-fileupload');
app.use(fileUpload());

// database connections
const dbConnect=require('./config/database');
dbConnect.connect();


//cloud se connect krna h 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h 
const Upload = require("./routes/file.route");
app.use('/api/v1/upload', Upload);

// starting up the server
app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`);
})