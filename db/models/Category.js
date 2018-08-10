const Sequelize = require('sequelize');
const db = require('../db.js');


const Category = db.define('category', {
  name: Sequelize.STRING, 
});

Category
  .sync({ force: true })
  .then(() => {
    return Category.create({
        name: 'food'
    });
  });