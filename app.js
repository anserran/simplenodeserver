var express = require('express');
var app = express();
var pub = __dirname + '/public';
app.use(express.static(pub));
app.listen(3000, function(){
	console.log('Listening on localhost:3000');
});