var fs = require('fs');

//reading
console.log('reading file 1');
var data = fs.readFileSync('abc.txt', 'utf8');
console.log(data);

//writing
console.log('copying data...');
fs.writeFileSync('output.txt', data);

console.log('done! displaying results...');
var data2 = fs.readFileSync('output.txt', 'utf8');
console.log(data2);
