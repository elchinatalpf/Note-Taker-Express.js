// require package and uuid for unique id generator.
const fs = require('fs');
const apiRouter = require('express').Router();
var { v4: uuidv4 } = require('uuid');

// extract data from json file.
  apiRouter.get('/notes', async (req, res) => {
    const jsonDb = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    return res.json(jsonDb);
  });
// post data in json file
  apiRouter.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
    });
// delete data (note) from json file
    apiRouter.delete('/notes/:id', (req, res) => {
      const jsonDb = JSON.parse(fs.readFileSync('db/db.json'));
      let deleteN =jsonDb.filter(noteId => noteId.id !== req.params.id);
      fs.writeFileSync('db/db.json', JSON.stringify(deleteN));
      res.json(deleteN);
    });

  module.exports = apiRouter;
