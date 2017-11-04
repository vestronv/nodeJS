var http = require('http');
var fs = require('fs');

//var readStream = fs.createReadStream(__dirname + '/aTextFile.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/iWasWrittenUsingPipe.txt');

//now no need it to listen for 'data' event...
//readStream.pipe(writeStream);

var jsondata = {
name : 'Vimal',
age : 23
};

var server = http.createServer(function(req, res){
        console.log('req made at : ' + req.url);
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(jsondata));

});

server.listen(3007, '127.0.0.1');
console.log('listening on 3007...');


