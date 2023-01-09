const express=require('express');
const { get } = require('express/lib/response');
const fs= require('fs');
const path= require('path');

const router=express.Router();

router.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'/index.html');
    res.status(200);
    res.sendFile(filePath);
    // res.sendFile(__dirname+'/index.html')

})

router.get('/health',(req,res)=>{
    res.status(200);
    var info={status:'up'};
    res.json(info);
})

module.exports= router;