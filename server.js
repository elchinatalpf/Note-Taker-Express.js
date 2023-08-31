// require package
const express = require('express');
const { clog } = require('./middleware/clog');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);
