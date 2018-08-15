const db = require('../controllers/user.js');
const app = require('../app.js');
const login = require('express').Router();

login.post('/login', (req, res) => {
  let query = {
    email: req.body.email,
    password: req.body.password
  };

  db.login(query, (err, data) => {
    console.log(query);
    if (err) {
      res.sendStatus(500);
      res.send('Server side error happened');
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

module.exports = login;