const path=require('path');
const rootDir=require("../util/path")

exports.contactForm=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
}

exports.contactSuccess=(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'));

}