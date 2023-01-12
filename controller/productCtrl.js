const productModel=require('../models/product.model');
const productRepository= require('../repositories/productRepository');

class ProductCtrl{
    async get(req,res){
        //db.products.find()
        const data= await productRepository.get();
            res.status(200);
            res.json(data);
    }

    async post(req,res){
        try{
            await productRepository.save(req.body);
                res.status(201);
                res.send('Created');
        }catch(err){
            res.status(500);
            res.send('Internal Server Error');
        }
    }
};

module.exports = new ProductCtrl();
