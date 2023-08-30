const db = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');
const path = require('path');


// https://www.npmjs.com/package/uniqid

  router.get('/api/notes', (req, res) => {
    fs.readFile (path.join(__dirname, "../db/db.json"), (err, data) => {
      console.log(JSON.parse(data));
      
      res.send(data);
    });
  });
  
  
  router.post('/api/notes', (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid()
    };
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      let userNotes = [];
      if (err) {
        console.log(err)
      }
      const notesData = JSON.parse(data);
      notesData.push(newNote);
      userNotes = JSON.stringify(notesData, null, 2);
      
      fs.writeFile(path.join(__dirname, "../db/db.json", userNotes ), (err) => {
        if (err) {
          console.log(err);
        }
        res.sendFile(path.join(__dirname, './db/db.json'));
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