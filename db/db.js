const Sequelize = require('sequelize');
const {database, username, password} = require('./config.js');

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.category = require('./models/Category.js')(sequelize, Sequelize);
db.itinerary = require('./models/Itinerary.js')(sequelize, Sequelize);


//Associations
 db.itinerary.belongsTo(db.category)
 db.category.hasMany(db.itinerary)  


sequelize.sync({force:true})
  .then(() => {
    console.log(`Database & tables created!`)
})

module.exports = {
  db
}