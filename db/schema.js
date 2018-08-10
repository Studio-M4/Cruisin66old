var Sequelize = require('sequelize');

var db = new Sequelize('crusin66', 'root', '');

var Users = db.define('Users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

Users.sync()
  .then(function () {
    return Users.create({
      
    });
  })
  .then(function () {
    return Users.findAll({where: {email: ''}});
  })
  .then(function(users) {
    users.forEach(function (user) {
      console.log(user.userName + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    console.error(err);
    db.close();
  })