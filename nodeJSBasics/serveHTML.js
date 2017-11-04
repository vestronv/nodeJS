var http = require('http');
var fs = require('fs');


var writeStream = fs.createWriteStream(__dirname + '/iWasWrittenUsingPipe.txt');

var server = http.createServer(function(req, res){
        console.log('req made at : ' + req.url);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        readStream.pipe(res);

});

server.listen(3007, '127.0.0.1');
console.log('listening on 3007...');


