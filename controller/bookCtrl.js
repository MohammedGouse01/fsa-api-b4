var books=[
    {id:'1', name:'book1', price:100},
    {id:'2', name:'book2', price:200},
    {id:'3', name:'book3', price:300}
];

const get = (req,res)=>{
    res.status(200);
    res.json(books);
}
const post =(req, res)=>{
    const data=req.body;
    books.push(data);

    res.status(201);//created
    res.send('Created');
}
module.exports={
    get,
    post,
}