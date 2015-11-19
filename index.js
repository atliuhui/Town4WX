var express = require('express');
var expresshandlebars = require('express-handlebars');
var path = require('path');
// var favicon = require('serve-favicon');

var app = express();
var hbs = expresshandlebars.create({
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home', {title: 'HOME', name: 'id'});
});

app.get('/story/:id', function (req, res) {
    res.render('story', {title: 'STORY', name: req.param("id")});
});

app.get('/venue/:id', function (req, res) {
    res.render('venue', {title: 'VENUE', name: req.param("id")});
});

app.get('/person/:id', function (req, res) {
    res.render('person', {title: 'PERSON', name: req.param("id")});
});

app.listen(3000);