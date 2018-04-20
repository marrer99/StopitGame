var express = require('express');

var app = express();

app.use(express.static('public'));

var server = app.listen(8000);


console.log('server listening on 8000')

 


