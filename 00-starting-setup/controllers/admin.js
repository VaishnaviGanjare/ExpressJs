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
  const product = new Product(title, imageUrl, price, description);
  product.save()
  .then(()=>{
    res.redirect('/');
  })
  .catch((err)=>{
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  console.log(req.params);
  const prodId=req.params.productId;
  console.log(prodId);
  Product.findById()
  .then(([product])=>{
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product[0]
    });
  })
  .catch((err)=>{
    console.log(err);
  })
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
  updatedProduct.edit(prodId)
  .then(([product])=>{
    res.redirect('/admin/products');
  })
  .catch((err)=>{
    console.log(err);
  })
  
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([product])=>{
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch((err)=>{
   console.log(err);
  })
};

exports.postDeleteProduct = (req, res, next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
  Product.deleteById(prodId)
  .then(([product])=>{
    res.redirect('/admin/products');
  })
  .catch((err)=>{
    console.log(err);
  })
}