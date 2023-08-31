// require package
const path = require('path');
const htmlRouter = require('express').Router();
// api to navigate between the two files
htmlRouter.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

  htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
  });


module.exports = htmlRouter;
