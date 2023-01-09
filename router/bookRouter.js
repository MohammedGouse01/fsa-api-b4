const { response } = require('express');
const express=require('express');
const router=express.Router();

var books=[
    {id:'1', name:'book1', price:100},
    {id:'2', name:'book2', price:200},
    {id:'3', name:'book3', price:300}
];
    
router.get('/',(req,res)=>{
    res.status(200);
    res.json(books);
})

module.exports = router;