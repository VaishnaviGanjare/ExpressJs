const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  console.log(req.params);
  const prodId=req.params.productId;
  console.log(prodId);
  Product.findById(prodId, (product)=>{
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product || {}
    });
  });
};

exports.postEditProduct = (req,res,next)=>{
  const prodId=req.body.productId;
  const updatedtitle=req.body.title;
  const updatedimageUrl=req.body.imageUrl;
  const updatedprice=req.body.price;
  const updateddescription=req.body.description;

  const updatedProduct=new Product(
    prodId, 
    updatedtitle, 
    updatedimageUrl, 
    updatedprice, 
    updateddescription
  );
  updatedProduct.save();
  res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
  Product.deleteById(prodId);
  res.redirect('/admin/products');
}