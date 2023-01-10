const { response } = require('express');
const express=require('express');
const bookCtrl=require('../controller/bookCtrl')
const router=express.Router();


router.get('/',bookCtrl.get);
router.post('/',bookCtrl.post);

module.exports = router;