const express = require('express');
const app = express();

app.get('/hello', function(req,res){
    res.send('Hello From Index.js');
})

app.listen(3000);