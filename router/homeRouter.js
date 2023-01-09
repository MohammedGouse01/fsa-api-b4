const express=require('express');
const { get } = require('express/lib/response');
const homeCtrl= require('./../controller/homeCtrl');


const router=express.Router();

router.get('/',homeCtrl.home)

router.get('/health',homeCtrl.health)

module.exports= router;