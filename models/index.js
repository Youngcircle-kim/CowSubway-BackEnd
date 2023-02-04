const { Sequelize, DataTypes } = require('sequelize');

const Menu = require('./menu');
const Bread = require('./bread');
const Cheese = require('./cheese');
const Items = require('./items');
const Method = require('./method');
const Place = require('./place');
const Combo = require('./combo');
const Sauce = require('./sauce');

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

db.Menu = Menu;
db.Bread = Bread;
db.Cheese = Cheese;
db.Items = Items;
db.Method = Method;
db.Place = Place;
db.Combo = Combo;
db.Sauce = Sauce;

Menu.init(sequelize);
Bread.init(sequelize);
Cheese.init(sequelize);
Items.init(sequelize);
Method.init(sequelize);
Place.init(sequelize);
Combo.init(sequelize);
Sauce.init(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
