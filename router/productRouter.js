const express=require('express');
const productCtrl=require('../controller/productCtrl');
const router=express.Router();

router.get('/',productCtrl.get);
router.get('/:id',productCtrl.getById);
router.post('/',productCtrl.post);
module.exports= router;