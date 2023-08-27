const path = require('path');

module.exports = (app) => {

  app.get('*', (req, res) => {
    res.sednFile(path.join(__dirname, '../public/index.html'))
  });
  
  app.get('/note', (req, res) => {
    res.sednFile(path.join(__dirname, '../public/notes.html'))
  });
  
  
}


module.exports = htmlRoutes;


// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page