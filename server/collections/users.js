const db = require('../../db/schema.js');
const User = require('../models/user.js');

const Users = new db.Collection();

Users.model = User;

module.exports = Users;