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

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
