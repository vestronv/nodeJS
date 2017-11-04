var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log('req made at : ' + req.url);
        res.writeHead(200, {'Content-Type' : 'text/html'});
	
	if(req.url === '/' || req.url === '/home'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	else if(req.url === '/api/jsonapi'){
		var jsondata = [{name:'Vimal', age:23}, {name:'Priyesh', age:24}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(jsondata));
	}
	else{
		res.writeHead(200, {'Content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/404.html').pipe(res);
	}

});

server.listen(3007, '127.0.0.1');
console.log('listening on 3007...');

