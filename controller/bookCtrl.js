var books=[
    {id:1, name:'book1', price:100},
    {id:2, name:'book2', price:200},
    {id:3, name:'book3', price:300}
];

const get = (req,res)=>{
    res.status(200);
    res.json(books);
};

const getById=(req,res)=>{
    const id = req.params.id;


    const result = books.find(book=>book.id===+id);
    res.status(result? 200: 404);
    res.send(result? result: 'Book not found');
    // if(result){
    //     res.status(200)
    //     res.json(result);
    // }
    // else{
    //     res.status(404);
    //     res.send('Book not found');
    // }
    // for (let i=0;i<books.length;i++){
    //     if(books[i].id=== +id){
    //         res.status(200);
    //         res.json(books[i]);
    //         return;
    //     };
    // }
    // res.status(404);
    // res.send('book not found');
};

const post =(req, res)=>{
    const data=req.body;
    books.push(data);

    res.status(201);//created
    res.send('Created');
};

const remove = (req,res)=>{
const id = +req.params.id;
for(let i=0;i<books.length;i++){
    if(books[i].id===id){
        books.splice(i,1);
        res.status(204);
        res.send();
    }
   
    
}
    res.status(404);
    res.send('Not found');
};

const put = (req,res)=>{
    const id= +req.params.id;
    const data= req.body;

    if(!data.name|| !data.price){
        res.status(400);
        const errors=[];
        if(!data.name){
            const err={ msg: 'Name is required'};
            errors.push(err);
        };
        if(!data.price){
            const err={ msg: 'price is required'};
            errors.push(err);
        };
        
        res.json(errors)
    }
    for(let i=0;i<books.length;i++){
        if(books[i].id===id){

            books[i].name=data.name;
            books[i].price=data.price;

            res.status(202);
            res.send();
            return;
        }
    }

    res.status(404);
    res.send('Not found');
}

const patch=(req,res)=>{
    const id=+req.params.id;
    const data=req.body;

    for(let i=0;i<books.length;i++){
        if(books[i].id===id){
            book=books[i];
            for(let key in data){
                book[key]=data[key];
            }
            res.status(200);
            res.send();
            return;
        }
    }
    res.status(404);
    res.send('Not found')
}

module.exports={
    get,
    post,
    getById,
    remove,
    put,
    patch,
};