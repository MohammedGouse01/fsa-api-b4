const { response } = require('express');
const express=require('express');
const bookCtrl=require('../controller/bookCtrl')
const router=express.Router();


router.get('/',bookCtrl.get);
router.get('/:id',bookCtrl.getById);

router.post('/',bookCtrl.post);

module.exports = router;