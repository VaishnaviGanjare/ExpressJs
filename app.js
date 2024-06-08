
const express=require('express');
const app=express();
const bodyParser = require('body-parser');

//console.log('starting application');
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST">product: <input type="text" name="title"><br>size:  <input type="number" name="size"><br><button type="submit">add product</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h>Hello from NodeJs!</h>');
});

app.listen(4000);