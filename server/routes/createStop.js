const db = require('../controllers/stop.js');
const app = require('../app.js');
const stop = require('express').Router();

stop.post('/stop', (req, res) => {
  let newStop = {
    name: req.body.name || '',
    description: req.body.description || '',
    userId: req.body.userId || 8
  };

  db.createStop(newStop, (err, data) => {
    if (err) {
      res.sendStatus(500);
      res.send('Server side error happened');
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

module.exports = stop;