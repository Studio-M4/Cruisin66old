var controller = require('./controllers');
var router = require('express').Router();

// Connect controller methods to their corresponding routes
router.post('/login', controller.users.login);

router.post('/logout', controller.users.logout);

router.post('/signup', controller.users.signup);

// router.get('/itineraries', controller.itineraries.getAll);

// router.get('/itinerary/:id', controller.itineraries.getById);

// router.post('/itinerary', controller.itineraries.createItinerary);

// router.get('/stop', controller.stop.get);

// router.post('/stop', controller.stop.createStop);

module.exports = router;

// /user - GET - userID 
// /comments - GET - stopID/itinerary ID
// /photos - GET - stopID/itinerary ID
// /itinerary - UPDATE/DELETE
// /stop - UPDATE/DELETE


