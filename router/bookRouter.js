const { response } = require('express');
const express=require('express');
const bookCtrl=require('../controller/bookCtrl')
const router=express.Router();


router.get('/',bookCtrl.get);
router.post('/',bookCtrl.post);
router.get('/:id',bookCtrl.getById);
router.delete('/:id',bookCtrl.remove);
router.put('/:id',bookCtrl.put);
router.patch('/:id',bookCtrl.patch);

module.exports = router;