const db = require('../../db/schema.js');

const User = db.Model.extend({
  tableName: 'Users',
  hasTimeStamps: true
});

module.exports = User;