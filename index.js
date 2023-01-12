const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const homeRouter=require('./router/homeRouter');
const bookRouter=require('./router/bookRouter');
const productRouter=require('./router/productRouter');

const app= express();
const PORT= 3000;

app.listen(PORT,()=>console.log(`server is running on the PORT ${PORT}`));
mongoose.connect('mongodb://127.0.0.1:27017/fsa',()=>console.log('connected to DB'));

app.use(bodyParser.json());

app.use('/api/products',productRouter);
app.use('/',homeRouter);
app.use('/books',bookRouter);
app.get('*',(req,res)=>{
    res.status(404);
    res.send('Not found');
});
