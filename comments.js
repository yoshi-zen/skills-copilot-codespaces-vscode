// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get('/comments', function(req, res) {
    // read from file
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(404).send('File not found');
        }
        else {
            res.send(data);
        }
    });
});

// POST method route
app.post('/comments', function(req, res) {
    // read from file
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(404).send('File not found');
        }
        else {
            var comments = JSON.parse(data);
            var newComment = {
                id: comments.length + 1,