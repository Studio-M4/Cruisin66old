import db from '../models/index.js'

//currently fetching allItineraries, will need to be refactored to get itineraries based on location
db.fetchItineraries = () => {
    console.log('Fetching all itineraries');
    return db.Itinerary.findAll({})
}

db.fetchItinerary = (itineraryId) => {
    console.log('Fetching specific itinerary');
    return db.Itinerary.findOne({where: {id: itineraryId}})
}

db.createItinerary = (itineraryObj) => {
    console.log('Creating itinerary'); 
    return db.Itinerary.build(itineraryObj)
        .save();
}

db.fetchStop = (stopId) => {
    console.log('Fetching specific stop');
    return db.Stop.findOne({where: {id: stopId}})
}

db.fetchItineraryComments = (itineraryId) => {
    console.log('Fetching an itineraries comments');
    return db.ItinerariesComment.findAll({where: {itineraryId: itineraryId}})
} 

db.fetchStopComments = (stopId) => {
    console.log('Fetching an itineraries comments');
    return db.StopsComment.findAll({where: {stopId: stopId}})
} 

db.fetchStopPhotos = (stopId) => {
    console.log('Fetching an itineraries photos');
    return db.StopPhoto.findAll({where: {stopId: stopId}})
} 

db.fetchUserFavorites = (userId) => {
    console.log('Fetching users favorited itineraries');
    return db.FavoritefindAll({where: {userId: userId}})
} 

export default db;