const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const corOptions = {
  origin: 'http://localhost:5173',
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
