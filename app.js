//const http=require('http');
const express=require('express');
const app=express();

console.log('starting application');
app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
});

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h>Hello from NodeJs!</h>');
    // const value='hi';
    // res.send({key1:value});
});

// const server= http.createServer(app);
// server.listen(4000);

//above teo lines can be replace with below line as it does same work internally.
app.listen(4000);