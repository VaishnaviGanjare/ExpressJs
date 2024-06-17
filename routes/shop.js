const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require("../util/path")
const shopContol=require('../controllers/products');

// path: /shop/
router.get('/',shopContol.shopController);

module.exports=router;