var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;

var app = express();
app.use(express.static('node_modules'));
app.use(express.static('app'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, function (err) {
    if (err) {

    } else {
        open('http://localhost:' + port);
    }
})
