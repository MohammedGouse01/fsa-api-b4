const productModel=require('../models/product.model');
const get= ()=>{
    return productModel.find({},{updatedDate:0,createdDate:0,__v:0});
}

const save =(data)=>{
    data.createdDate= new Date();
    const Product=new productModel(data);
    return Product.save();
}

const getById= (id)=>{
    return productModel.find({
        _id:id
    })
};

const remove=(id)=>{
    return productModel.deleteOne({
        _id:id
    });
};

const patch= (id,data)=>{
    delete data._id;
    let updateObj={};
    for(let key in data){
        updateObj[key]=data[key];
    }
    console.log(updateObj);
    return productModel.updateOne({_id:id},{
        $set:updateObj})
}

const update= (id,data)=>{
    return productModel.updateOne({_id:id},{
        $set:{
            brand: data.brand,
            model: data.model,
            price: data.price,
            inStock: data.inStock,
            discount: data.discount
    }})
}

module.exports= {
    get,
    save,
    getById,
    remove,
    update,
    patch,
}