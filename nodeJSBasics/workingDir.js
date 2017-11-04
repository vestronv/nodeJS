var fs = require('fs');

//async dir creation
fs.mkdir('someDir', function(){
	console.log('Directory successfully created!');
});

