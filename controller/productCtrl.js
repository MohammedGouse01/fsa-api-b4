const productModel=require('../models/product.model');
const productRepository= require('../repositories/productRepository');

class ProductCtrl{
    async get(req,res){
        try{
            //db.products.find()
            const data= await productRepository.get();
                res.status(200);
                res.json(data);
        }catch(err){
            res.status(500);
            res.send('Internal Server Error');
        }

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

    async getById(req,res){
        try{
            const id= req.params.id;
            const data = await productRepository.getById(id);
            res.status(200);
            res.send(data);
        }catch(err){
            res.status(500);
            res.send('Internal Server Error');
        }
    }
    async remove(req,res){
        try{
            const id=req.params.id;
            await productRepository.remove(id);
            res.status(204);
            res.send();
        }catch(err){
            res.status(404);
            res.send('Not found')
        }
    }
    
    async update(req,res){
        try{
            const id=req.params.id;
            await productRepository.update(id,req.body);
            res.status(204);
            res.send();
        }catch(err){
            console.log(err);
            res.status(500);
            res.send('Internal Server Error');
        }
    }
    async patch(req,res){
        try{
            const id=req.params.id;
            await productRepository.patch(id,req.body);
            res.status(204);
            res.send();
        }catch(err){
            console.log(err);
            res.status(500);
            res.send('Internal Server Error');
        }
    }
};

module.exports = new ProductCtrl();
