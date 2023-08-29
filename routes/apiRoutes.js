const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');
const path = require('path');


// https://www.npmjs.com/package/uniqid

  router.get('/notes', (req, res) => {
    fs.readFile (path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));

      res.send(data);
    });
  });

  
  router.post('/notes', (req, res) => {
    let userNotes = [];
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid()
    }
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      let userNotes = JSON.parse(data);
      userNotes.push(newNote);
      
      fs.writeFile(__dirname, "../db/db.json", JSON.stringify(userNotes), "utf-8", (err) => {
        if (err) throw err;
        res.send('Your NOTE was saved!');
      });
    });
  });
  
  module.exports = router;



  // router.post("/", (req, res) => {
  //   try {
  //     const data = await JSON.parse(fs.write)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })