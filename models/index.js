const { Sequelize, DataTypes } = require('sequelize');

const Method = require('./method');
const Place = require('./place');
const Combo = require('./combo');

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

db.Method = Method;
db.Place = Place;
db.Combo = Combo;

Method.init(sequelize);
Place.init(sequelize);
Combo.init(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
