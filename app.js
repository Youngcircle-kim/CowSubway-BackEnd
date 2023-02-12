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
const orderRouter = require('./routes/orderRouter');

app.use('/', menuRouter);
app.use('/', orderRouter);

app.listen(3000);
