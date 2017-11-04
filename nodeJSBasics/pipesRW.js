var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/aTextFile.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/iWasWrittenUsingPipe.txt');

//now no need it to listen for 'data' event...
readStream.pipe(writeStream);

