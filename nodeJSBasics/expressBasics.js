var express = require('express');

var app = express();

app.get('/', function(req, res){
        res.send('this is the homepage, powered by "express"');
});

app.listen(3007);

