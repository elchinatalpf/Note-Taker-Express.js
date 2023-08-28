const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');

// https://www.npmjs.com/package/uniqid

  router.get('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));

      res.send(data);
    });
  });

  router.post('/api/notes', (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid()
    }
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      let parseData = JSON.parse(data);
      parseData.push(newNote);
      console.log(parseData);
      
      fs.writeFile('./db/db.json', JSON.stringify(parseData), (err) => {
        if (err) throw err;
        res.send('Your NOTE was pushed!');
      });
    });
  });

  router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
  });

  router.post('/api/notes', (req, res) => {
    db.readFileSync('../db/db.json');

  });

module.exports = router;