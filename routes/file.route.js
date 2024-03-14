const express=require('express');
const router=express.Router();


// const {localFileUpload}=require("../controllers/")
const {localFileUpload}=require('../controllers/file');
router.post('/fileUpload',localFileUpload);

module.exports=router;