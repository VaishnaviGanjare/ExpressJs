
const express=require('express');
const app=express();
const shopRoutes=require('./routes/shop');
const adminRoutes=require('./routes/admin');//we can also add .js after admin or it will be add by default.
const bodyParser = require('body-parser');

//console.log('starting application');
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);//sending object , it should be declare here as order matters if declare it after next niddleware then it will not get execute.

app.use('/shop',shopRoutes);

//for giving 404 error when wrong url enter
app.use('/',(req,res,next)=>{
    res.status(404).send('<h>Page not found</h>');
});

app.listen(4000);