

const localFileUpload=(req,res)=>{
   try{
        const file=req.files.file;
       
        const path=__dirname+'/Files/'+Date.now()+`.${file.name.split('.')[1]}`;

        file.mv(path,(err)=>{
            console.log(err);
        })
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });


   }catch(err){
    console.log("Not able to upload the file on server")
    console.log(error);
   }
}

module.exports={localFileUpload};