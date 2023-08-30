const fs = require('fs');
const router = require('express').Router();
var uniqid = require('uniqid');
const path = require('path');

  router.get("/api/notes", async (req, res) => {
    const jsonDb = JSON.parse(fs.readFileSync ('db/db.json', 'utf8'));
    res.json(jsonDb);
    
  });

  router.post("/api/notes", async (req, res) => {
    const jsonDb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    jsonDb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(jsonDb));
    res.json(jsonDb);

  });

  module.exports = router;
