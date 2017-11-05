var express = require('express');

var app = express();

app.set('view engine', 'ejs');

console.log('starting the server...');
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
        res.sendFile(__dirname + '/contact.html');
});


app.get('/profile_template/:name', function(req, res){
	var data = {age: 29, job: 'porn-star'};
	res.render('profile_template', {person: req.params.name, data: data});//send person object
});

app.listen(3007);

