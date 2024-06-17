
const express=require('express');
const app=express();
const shopRoutes=require('./routes/shop');
const adminRoutes=require('./routes/admin');//we can also add .js after admin or it will be add by default.
const contactusRoutes=require('./routes/contactus');
const bodyParser = require('body-parser');
const path=require('path');

const errorController=require('./controllers/error.js');

//console.log('starting application');
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);//sending object , it should be declare here as order matters if declare it after next niddleware then it will not get execute.

app.use('/shop',shopRoutes);

app.use('/contactus',contactusRoutes);

//for giving 404 error when wrong url enter
app.use('/',errorController.get404);
app.listen(4000);