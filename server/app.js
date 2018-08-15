var express = require('express');
// Middleware
var morgan = require('morgan');
const bodyParser = require('body-parser');
var app = express();

/****** SETUP HEADERS *****/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, X-Requested-With');
  next();
});


// Set what we are listening on
app.set('port', 3000);
// Logging and parsing
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the routes
app.post('/signup', require('./routes/signup.js'));
app.post('/login', require('./routes/login.js'));

app.post('/itinerary', require('./routes/createItinerary.js'));
app.get('/itineraries', require('./routes/getItineraries.js'));
app.get('/itinerary', require('./routes/getItineraryById.js'));

app.post('/stop', require('./routes/createStop.js'));
app.get('/stops', require('./routes/getStops.js'));
app.get('/stop', require('./routes/getStopById.js'));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;