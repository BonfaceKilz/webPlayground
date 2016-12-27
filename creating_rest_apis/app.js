var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('I am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730);
