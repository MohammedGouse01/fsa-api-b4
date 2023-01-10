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
module.exports={
    get,
    post,
    getById,
};