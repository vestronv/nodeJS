var http = require('http');
var fs = require('fs');

//read in chunks ans transfer/display...
var readStream = fs.createReadStream(__dirname + '/aTextFile.txt', 'utf8');

readStream.on('data', function(chunk){
	console.log('new chunk : ' + chunk);
});


