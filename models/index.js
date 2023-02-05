const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const sauce = require('./sauce');
const extras = require('./extras');
const vegetable = require('./vegetable');
const beta_user = require('./beta_user');

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sauce = sauce;
db.extras = extras;
db.vegetable = vegetable;
db.beta_user = beta_user;

sauce.init(sequelize);
extras.init(sequelize);
vegetable.init(sequelize);
beta_user.init(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

beta_user.hasMany(sauce, {
  foreignKey: 'order_id',
});

sauce.belongsTo(beta_user, {
  foreignKey: 'order_id',
});

module.exports = db;
