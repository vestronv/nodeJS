var http = require('http');

var server = http.createServer(function(req, res){
	console.log('req made : ' + req.url);
	res.writeHead(200, {'Content-Type': 'text\\plain'});
	res.end('Hey, this is server response.');
});

server.listen(3007, '127.0.0.1');
console.log('now listening...');

