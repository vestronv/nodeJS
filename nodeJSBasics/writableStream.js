var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/aTextFile.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/iWroteIt.txt');

readStream.on('data', function(chunk){
	console.log('writing new chunk... ');
	writeStream.write(chunk);
});

