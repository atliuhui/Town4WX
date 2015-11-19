var express = require('express');
var expresshandlebars = require('express-handlebars');
var path = require('path');
// var favicon = require('serve-favicon');

var routesException = require('./routes/exception');
var routesIndex = require('./routes/index');
var routesStory = require('./routes/story');
var routesVenue = require('./routes/venue');
var routesPerson = require('./routes/person');

var app = express();
var hbs = expresshandlebars.create({
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routesIndex);
app.use('/story', routesStory);
app.use('/venue', routesVenue);
app.use('/person', routesPerson);

app.use(routesException.notfound);
app.use(routesException.error);

module.exports = app;