const express = require('express');
const cors = require('cors');
const cart = require('./routes/cart');

const app = express();

const corOptions = {
  origin: 'https://localhost:3000',
};

app.set('port', process.env.PORT || 3000);

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cart', cart);

require('./models/index');

const menuRouter = require('./routes/menuRouter');

app.use('/menu', menuRouter);

app.listen(3000);
