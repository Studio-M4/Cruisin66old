'use strict';
  module.exports = (Sequelize, type) => {
    var Category = Sequelize.define('Category', {
      name: type.STRING
    });

    Category.associate = function(models) {
      Category.hasMany(models.Itinerary)
      Category.belongsToMany(models.User, {through: 'userInterests'});
    };

    return Category;
  }


// const Sequelize = require('sequelize');
// const db = require('../db.js');


// const Category = db.define('category', {
//   name: Sequelize.STRING, 
// });

// Category
//   .sync({ force: true })
//   .then(() => {
//     return Category.create({
//         name: 'food'
//     });
//   });
