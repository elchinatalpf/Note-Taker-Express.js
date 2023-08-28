const path = require('path');
const router = require('express').Router();


  router.get('*', (req, res) => {
    res.sednFile(path.join(__dirname, '../public/index.html'))
  });

  router.get('/note', (req, res) => {
    res.sednFile(path.join(__dirname, '../public/notes.html'))
  });

module.exports = router;
