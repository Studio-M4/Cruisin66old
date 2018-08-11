const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const db = require('../db.js');
const hash = require('../utilities/helps.js');

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
  },
},

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('userName');
    },
    set(userName) {
      this.setDataValue('userName', userName);
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('firstName');
    },
    set(firstName) {
      this.setDataValue('firstName', firstName);
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('lastName');
    },
    set(lastName) {
      this.setDataValue('lastName', lastName);
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('email');
    },
    set(email) {
      this.setDataValue('email', email);
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('password');
    },
    set(password) {
      this.setDataValue('password', password);
    }
  },
  photoAvar: {
    type: Sequelize.STRING,
    allowNull: true,
    get() {
      return this.getDataValue('photoAvar');
    },
    set(photoAvar) {
      this.setDataValue('photoAvar', photoAvar);
    }
  }
});

let createUser = (user, callback) => {
  User
  .sync({ force: false })
  .then(() => {
    // Retrieve objects from the database:
    return User.findOne({ 
      where: {
        email: user.email
      }
    });
  })
  .then((existingUser) => {
    console.log(existingUser);
    if (existingUser !== null) {
      console.log('email already exists');
      if (callback !== undefined) {
        callback({
          messageCode: 101, 
          message: 'User email already exists!'
        });
      }      
    } else {
      hash.hashPassword(user, (err, userResult) => {
        return User.create({
          userName: userResult.userName,
          firstName: userResult.firstName,
          lastName: userResult.lastName,
          email: userResult.email,
          password: userResult.password
        });
      });
    }        
  })
  .then((newUser) => {
    if (callback !== undefined) {
      callback(newUser);
    }
  })
  .catch((err) => {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
}

let signIn = (user, callback) => {
  User
  .sync({ force: false })
  .then(() => {
    // Retrieve objects from the database:
    return User.findOne({ 
      where: {
        email: user.email
      }
    });
  })
  .then((existingUser) => {
    console.log(existingUser);
    if (existingUser !== null) {
      bcrypt.compare(user.password, existingUser.password, function(err, res) {
        if (res === true) {
          console.log('User login successfully!');
          if (callback !== undefined) {
            callback({
              messageCode: 200, 
              message: 'User login successfully!',
              user: existingUser
            });
          } 
        } else {
          console.log('Wrong password');
          if (callback !== undefined) {
            callback({
              messageCode: 103, 
              message: 'Wrong password!'
            });
          }
        }
      });
    } else {
      console.log('User does not exist');
      if (callback !== undefined) {       
        callback({
          messageCode: 104, 
          message: 'User does not exist!'
        });
      }
    }
  })
  .catch((err) => {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
};

createUser({
  userName: 'MT3',
  firstName: 'Miller3',
  lastName: 'Tian',
  email: 'miller3@gamil.com',
  password: 'Welcome@123'
});

signIn({
  email: 'miller3@gamil.com',
  password: 'Welcome@123' 
});

module.exports.createUser = createUser;
module.exports.signIn = signIn;

