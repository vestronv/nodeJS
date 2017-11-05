var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('home page');

});

app.get('/profile/:name', function(req, res){
	res.send('welcome to profile of : ' + req.params.name);
});

app.listen(3007);

