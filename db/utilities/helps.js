const bcrypt = require('bcrypt-nodejs');

const hashPassword = (user, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        console.log(err);
      }
      let user_obj = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: hash
      };
      callback(null, user_obj);
    });
  });
}

module.exports.hashPassword = hashPassword;