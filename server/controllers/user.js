// This is the file that pass request to db User model
const user = require('../../db/models/User.js');
const hash = require('../../db/utilities/helps.js');
const bluebird = require('bluebird');

module.exports = {
  login: (req, res) => {
    user.findOne({ 
      where: {
        email: req.body.email
      }
    }) 
    .then((existingUser) => {
      console.log(existingUser);
      if (existingUser !== null) {
        bcrypt.compare(req.body.password, existingUser.password, function(err, result) {
          if (result === true) {
            console.log('User login successfully!');
            res.json(existingUser);
            res.status(200);
            res.send('User login successfully!');
          } else {
            console.log('Wrong password!');
            res.status(400);
            res.send('Wrong password!');
          }
        });
      } else {
        console.log('User does not exist');
        res.sendStatus(400);
        res.send('User does not exist!');
      }
    })
    .catch((err) => {
      // Handle any error in the chain
      console.error(err);
      res.sendStatus(500);
      res.send('Server side error happened');
    });
  },
  signup: (req, res) => {
    console.log('signup');
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    };

    user.findOne({ 
      where: {
        email: newUser.email
      }
    })
    .then((existingUser) => {
      console.log(existingUser);
      if (existingUser !== null) {
        console.log('Email already exists');
        res.sendStatus(400);
        res.send('Email already exists!'); 
      } else {
        hash.hashPassword(newUser, (err, userResult) => {
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
    .then((createdUser) => {
      res.json(createdUser);
      res.sendStatus(201);
    })
    .catch((err) => {
      // Handle any error in the chain
      console.error(err);
      res.sendStatus(500);
      res.send('Server side error happened');
    });
  }
}