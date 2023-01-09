const fs= require('fs');
const path= require('path');

function home(req,res){
    const filePath = path.join(__dirname,'/index.html');
    res.status(200);
    res.sendFile(filePath);
    // res.sendFile(__dirname+'/index.html')
}

function health(req,res){
    res.status(200);
    var info={status:'up'};
    res.json(info);
}

module.exports={
    home,
    health
}