const express=require('express');
const router = express.Router();

// /admin/add-product=>get request
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST">product: <input type="text" name="title"><br>size:  <input type="number" name="size"><br><button type="submit">add product</button></form>');
});

// /admin/add-product=>post request
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop');s
});

module.exports=router;