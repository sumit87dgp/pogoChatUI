// var express = require('express');
import express from 'express';
var path = require('path');
var open = require('open');

var port = 3000;

var app = express();

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port);
    }
})
