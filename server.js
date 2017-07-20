const express = require('express');
const app = express(); //express returns object reference

const Heroes =[
            {id:1, name:'Ram'},
            {id:2, name:'shyam'},
            {id:3, name:'Robert'},
            {id:4, name:'Downey'},
        ];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//writing apis -restful webservices
app.get('/api/sapient/heroes', function(req, res){
    res.json(Heroes);
});

app.listen(8081,function(){
    console.log('server is ready');
});