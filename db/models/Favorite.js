'use strict';
module.exports = (Sequelize, type) => {
  var Favorite = Sequelize.define('Favorite', {
  });

  Favorite.associate = function(models) {
    
  };

  return Favorite;
};






// const Sequelize = require('sequelize');
// const db = require('../db.js');

// const Favorite = db.define('favorite', {
// });

// Favorite
//   .sync({ force: true })
//   .then(() => {
//     return Favorite.create({
//     });
//   });
