const fs = require('fs');
const router = require('express').Router();
var { v4: uuidv4 } = require('uuid');
const path = require('path');

  // router.get('/api/notes', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../db/db.json'));
  // });


  router.get("/api/notes", (req, res) => {
    const jsonDb = JSON.parse(fs.readFileSync ('../db/db.json', 'utf8'));
    res.json(jsonDb);
    
  });

  router.post("/api/notes", (req, res) => {
    const jsonDb = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    jsonDb.push(newNote);
    fs.writeFileSync('../db/db.json', JSON.stringify(jsonDb));
    res.json(jsonDb);

  });


  // router.delete('/api/notes:id', (req, res) => {
  //   let dataID = fs.readFileSync('../db/db.json', 'utf8');
  //   const dataJSON = JSON.parse(dataID);
  //   const newNote = dataJSON.filter((note) => {
  //     return note.ide !== req.params.id;
  //   });
  //   fs.writeFileSync('../db/db.json', JSON.stringify(newNote));
  // });

  
  // router.delete('/api/notes/:id', (req, res) => {
  //   fs.readFile('db/db.json', (err, data) => {
  //     const idNote = req.params.id;
  //     let notesO;
  //     let notesA = JSON.parse(data);
  //     const note = notesA.find( ({id}) => id == idNote );
  //     if (!note) { res.status(400).send(`That note with ${id} does not exist`) }
  //     notesA.splice(index, 1);
  //     notesO = JSON.stringify(notesA, null, 2);
  //     fs.writeFile('db/db.json', notesO, (err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   });
  //   res.sendFile(path.join(__dirname, 'db/db.json'));
  // });

  module.exports = router;
