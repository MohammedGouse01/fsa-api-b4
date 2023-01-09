const express = require('express');


const homeRouter=require('./router/homeRouter');
const bookRouter=require('./router/bookRouter');

const app= express();
const PORT= 3000;

app.listen(PORT,()=>console.log(`server is running on the PORT ${PORT}`));

app.use('/',homeRouter)
//okjggjhfhfh

app.use('/books',bookRouter)

app.get('*',(req,res)=>{
    res.status(404);
    res.send('Not found');
})
