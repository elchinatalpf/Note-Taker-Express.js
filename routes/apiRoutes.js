const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');
const path = require('path');


  router.get("/api/notes", (req, res) => {
    
    res.sendFile(path.join(__dirname, "db/db.json"))
    
  });

  router.post("/api/notes", (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    fs.readFile("db/db.json", (err, data) => {

      let userNotes = [];
      if (err) {
        console.log(err);
      }
      const notesData = JSON.parse(data);
      if (!data) {
        data = [];
      }
      notesData.push(newNote);
      userNotes = JSON.stringify(notesData, null, 2);
      fs.writeFile("db/db.json", userNotes, (err) => {
        if (err) {
          console.log(err);
        }
      });

      res.sendFile(path.join(__dirname, "db/db.json"));
    });

    console.log(err);
    res.status(500).send("An error ocurred when reading file.");
  });

  module.exports = router;
