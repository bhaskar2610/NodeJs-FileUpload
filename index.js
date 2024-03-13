const express=require('express');

const app=express();
require('dotenv').config();
const PORT=process.env.PORT||8080;
const dbConnect=require('./config/database');

dbConnect.connect();
app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`);
})