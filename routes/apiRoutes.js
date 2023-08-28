const db = require('../db/db.json');
const fs = requite('fs');

// https://www.npmjs.com/package/uniqid

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
  });

  app.post('/api/notes', (req, res) => {
    db.readFileSync('../db/db.json');

  });

}

