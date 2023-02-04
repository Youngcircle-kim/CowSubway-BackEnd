const { Sequelize, DataTypes } = require('sequelize');

const Menu = require('./menu');
const Bread = require('./bread');
const Cheese = require('./cheese');
const Items = require('./items');
const Method = require('./method');
const Place = require('./place');
const Combo = require('./combo');
const OrderVegetable = require('./order_vegetable');
const OrderExtras = require('./order_extras');
const OrderSauce = require('./order_sauce');
const Extras = require('./extras');
const Vegetable = require('./vegetable');
const Sauce = require('./sauce');
const Recommend = require('./recommend');
const OrderItems = require('./orderItems');
const Payment = require('./payment');
const PayOrder = require('./pay_order');
const Order = require('./order');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.OrderItems = OrderItems;
db.Recommend = Recommend;
db.OrderSauce = OrderSauce;
db.OrderExtras = OrderExtras;
db.OrderVegetable = OrderVegetable;
db.Vegetable = Vegetable;
db.Extras = Extras;
db.Menu = Menu;
db.Bread = Bread;
db.Cheese = Cheese;
db.Items = Items;
db.Method = Method;
db.Place = Place;
db.Combo = Combo;
db.Sauce = Sauce;
db.Payment = Payment;
db.Pay_order = PayOrder;
db.Order = Order;

OrderItems.init(sequelize);
Recommend.init(sequelize);
OrderSauce.init(sequelize);
OrderExtras.init(sequelize);
OrderVegetable.init(sequelize);
Extras.init(sequelize);
Menu.init(sequelize);
Bread.init(sequelize);
Cheese.init(sequelize);
Items.init(sequelize);
Method.init(sequelize);
Place.init(sequelize);
Combo.init(sequelize);
Vegetable.init(sequelize);
Sauce.init(sequelize);
Payment.init(sequelize);
PayOrder.init(sequelize);
Order.init(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
