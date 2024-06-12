const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require("../util/path")

//path: /contactus/
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})

//path: /contactus/success
router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'));

})

module.exports=router;