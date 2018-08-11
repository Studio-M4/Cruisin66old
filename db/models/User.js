const Sequelize = require('sequelize');
const db = require('../db.js');
var Op = Sequelize.Op;

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
      return User.create({
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
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
      if (existingUser.password === user.password) {
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
    } else {
      console.log('User does not exist');
      if (callback !== undefined) {       
        callback({
          messageCode: 104, 
          message: 'User does not exist!'
        });
      }
    }
    db.close();      
  })
  .catch((err) => {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
};

createUser({
  userName: 'MT',
  firstName: 'Miller',
  lastName: 'Tian',
  email: 'miller2@gamil.com',
  password: 'Welcome@123'
});

signIn({
  email: 'miller@gamil.com',
  password: 'Welcome@123' 
});

module.exports.createUser = createUser;
module.exports.signIn = signIn;

