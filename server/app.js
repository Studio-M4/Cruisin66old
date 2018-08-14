var express = require('express');
// var db = require('../db/db.js');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json);

// Set up the routes
app.post('/signup', router);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}