const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const db = require('../db.js');
const hash = require('../utilities/helps.js');
var bluebird = require('bluebird');


const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 30;

const validationMessages = {
  firstName: {
    required: 'First name is required.',
  },
  lastName: {
    required: 'Last name is required.',
  },
  userName: {
    required: 'User name is required.',
  },
  email: {
    required: 'Email address is required.',
    email: 'Email address is not valid.',
    unique: 'Email address already exists.',
  },
  password: {
    required: 'Password is required.',
    minLength: `Password is too short (min ${PASSWORD_MIN_LENGTH} characters).`,
    maxLength: `Password is too long (max ${PASSWORD_MAX_LENGTH} characters).`,
  }
}

module.exports = (Sequelize, type) => {
  var User = Sequelize.define('User', {
    userName: type.STRING,
    firstName: type.STRING,
    lastName: type.STRING,
    password: type.STRING,
    photoAvatar: type.STRING,
  });

  User.associate = (models) => {
    User.belongsToMany(models.Category, {through: 'userInterests'});
    User.hasMany(models.Itinerary)
    User.hasMany(models.ItinerariesComment)
    User.hasMany(models.StopsComment)
    User.hasMany(models.Favorite)
  };
  
  User.sync();
  return User;
}