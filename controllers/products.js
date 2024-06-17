const Product=require('../models/product.js');
const path=require('path');
const rootDir=require("../util/path");

exports.addProductController=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.productAddController=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    //console.log(product);
    res.redirect('/shop');
}

exports.shopController=(req,res,next)=>{
    Product.fetchAll(products=>{
        //console.log(products);
        res.sendFile(path.join(rootDir,'views','shop.html'));
    });  
}