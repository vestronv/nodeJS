var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
	res.send('index');
});

app.get('/contact', function(req, res){
	res.send('contact');
});



