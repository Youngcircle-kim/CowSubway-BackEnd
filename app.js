const express = require('express');
const cors = require('cors');

const app = express();

const corOptions = {
  origin: 'https://localhost:3000',
};

app.set('port', process.env.PORT || 3000);

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./models/index');

const menuRouter = require('./routes/menuRouter');

app.use('/', menuRouter);

app.listen(3000);
