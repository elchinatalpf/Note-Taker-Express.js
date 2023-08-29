const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');

// https://www.npmjs.com/package/uniqid

  router.get('/api/notes', (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));

      res.send(data);
    });
  });

  
  router.post('/api/notes', (req, res) => {
    let userNotes = [];
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid()
    }
    fs.readFile(__dirname, "../db/db.json", (err, data) => {
      if (err) throw err;
      let userNotes = JSON.parse(data);
      userNotes.push(newNote);
      
      fs.writeFile(__dirname, "../db/db.json", JSON.stringify(userNotes), "utf-8", (err) => {
        if (err) throw err;
        res.send('Your NOTE was saved!');
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



  // router.post("/", (req, res) => {
  //   try {
  //     const data = await JSON.parse(fs.write)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })