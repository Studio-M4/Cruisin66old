const Sequelize = require('sequelize');
const db = require('../db.js');


const Itinerary = db.define('itinerary', {
  name: Sequelize.STRING,
  userId: Sequelize.INTEGER,
  categoryId: Sequelize.INTEGER,
  description: Sequelize.STRING,
});

Itinerary
  .sync({ force: true })
  .then(() => {
    return Itinerary.create({
        name: 'Napa Valley Wine Tour',
        userId: 1,
        categoryId: 1,
        description: 'This tour shows you the best vineyards to visit in the beautiful Napa Valley',
    });
  });
