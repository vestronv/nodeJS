var express = require('express');
var todoC = require('./controllers/todoC.js');

var app = express();

// setting template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// call controller
todoC(app);

// listen to port
app.listen(3007);
console.log('server up at localhost:3007');


