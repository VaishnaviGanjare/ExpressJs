const express=require('express');
const router=express.Router();

// path: /shop/
router.get('/',(req,res,next)=>{
    res.send('<h>Hello from NodeJs!</h>');
});

module.exports=router;