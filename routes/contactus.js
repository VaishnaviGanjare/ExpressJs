const express=require('express');
const router=express.Router();

//as we add controllers so below two declarations will be moved in contact.js
// const path=require('path');
// const rootDir=require("../util/path")

const contactController=require('../controllers/contact');

//path: /contactus/
router.get('/',contactController.contactForm);

//path: /contactus/success
router.post('/success',contactController.contactSuccess);

module.exports=router;