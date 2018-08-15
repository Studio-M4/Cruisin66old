// This is the file that pass request to db Stop model
const db = require('../../db/models/');

let getAllStops = (query, callback) => {
  db.Stop.findAll({ 
    where: {
      itineraryId: query.itineraryId
    }
  }) 
  .then((stops) => {
    console.log(stops);    
    callback(null, stops);
  })
  .catch((err) => {
    // Handle any error in the chain
    console.error(err);
    callback(err, null);
  });
}

let getStopById = (query, callback) => {
  db.Stop.findOne({
    where: {
      id: query.id
    }
  })
  .then((stop) => {
    console.log(stop);
    callback(null, stop);
  })
  .catch((err) => {
    console.error(err);
    callback(err, null);
  })
}

let createStop = (newStop, callback) => {
  db.Stop.create(newStop)
  .then((createdStop) => {
    console.log(createdStop);
    callback(null, createdStop);
  })
  .catch((err) => {
    console.error(err);
    callback(err, null);
  })
}

module.exports.createStop = createStop;
module.exports.getAllStops = getAllStops;
module.exports.getStopById = getStopById;