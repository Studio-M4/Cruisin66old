'use strict';
module.exports = (Sequelize, type) => {
  var Stop = Sequelize.define('Stop', {
    name: type.STRING,
    longitude: type.DOUBLE,
    latitude: type.DOUBLE,
    description: type.STRING,
    avgRating: type.FLOAT,
    address: type.STRING,
    zipCode: type.STRING,
    audioFile: type.STRING,
  });

  Stop.associate = function(models) {
    Stop.hasMany(models.StopsComment)
    Stop.hasMany(models.StopPhoto)
    Stop.belongsToMany(models.Itinerary, {through: 'ItineraryStops'});
  };

  return Stop;
};


// const Sequelize = require('sequelize');
// const db = require('../db.js');


// const Stop = db.define('stop', {
//   name: Sequelize.STRING,
//   longitude:Sequelize.DOUBLE,
//   latitude: Sequelize.DOUBLE,
//   description: Sequelize.STRING,
//   avgRating: Sequelize.FLOAT,
//   address: Sequelize.STRING,
//   zipCode: Sequelize.STRING,
//   audioFile: Sequelize.STRING,
// });

// Stop
//   .sync({ force: true })
//   .then(() => {
//     return Stop.create({
//         name: 'King Hill Vineyard',
//         longitude: 37.991823, 
//         latitude: -78.444572,
//         description: 'known for their amazing wine!!',
//         avgRating: 4.8,
//         address: '1353 Thomas Jefferson Pkwy, Charlottesville, VA' ,
//         zipCode: '22902',
//         audioFile: 'someaudiofile',
//     });
//   });