const express=require('express');
const productCtrl=require('../controller/productCtrl');
const router=express.Router();

router.get('/',productCtrl.get);

router.post('/',productCtrl.post);
module.exports= router;