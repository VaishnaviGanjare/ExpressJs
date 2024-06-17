const express=require('express');
const router = express.Router();
const productController=require('../controllers/products.js');

// /admin/add-product=>get request
router.get('/add-product',productController.addProductController);

// /admin/add-product=>post request
router.post('/add-product',productController.productAddController);

module.exports=router;