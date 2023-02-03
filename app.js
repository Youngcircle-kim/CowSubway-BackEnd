const express = require('express');
const db = require('./models/index.js');

const app = express();

const port = 3000;

app
  .get('/', (req, res) => {
    res.send('Hello World!');
  })
  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

db.sequelize
  .sync()
  .then(() => {
    console.log('sql connected');
  })
  .catch((err) => {
    console.log(err);
  });
