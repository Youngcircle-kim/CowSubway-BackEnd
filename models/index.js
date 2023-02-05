const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

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
db.PayOrder = PayOrder;
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

// 결제 : 결제 수단 = 1 : 1
Method.hasOne(Payment, {
  foreignKey: 'method_id',
});
Payment.belongsTo(Method, {
  foreignKey: 'method_id',
});

// 주문 : 식사 장소 = 1 : 1
Place.hasOne(Order, {
  foreignKey: 'place_id',
});
Order.belongsTo(Place, {
  foreignKey: 'place_id',
});

// 주문 : 결제_주문 = 1 : 1
Order.hasOne(PayOrder);
PayOrder.belongsTo(Order);

// 결제 : 결제_주문 = 1 : 1
Payment.hasOne(PayOrder);
PayOrder.belongsTo(Payment);

// 주문 : 주문상품들 = 1 : N
Order.hasMany(OrderItems, {
  foreignKey: 'order_number',
});
OrderItems.belongsTo(Order, {
  foreignKey: 'order_number',
});

// 주문상품들 : 제작상품 = 1 : N
OrderItems.hasMany(Items, {
  foreignKey: 'orders_id',
});
Items.belongsTo(OrderItems, {
  foreignKey: 'orders_id',
});

// 추천 소스 : 메뉴 = 1 : N
Recommend.hasMany(Menu, {
  foreignKey: 'recommend_id',
});
Menu.belongsTo(Recommend, {
  foreignKey: 'recommend_id',
});

// 소스 : 추천 소스 = 1 : N
Sauce.hasMany(Recommend, {
  foreignKey: 'sauce_id',
});
Recommend.belongsTo(Sauce, {
  foreignKey: 'sauce_id',
});

// 세트 : 제작상품 = 1 : N
Combo.hasMany(Items, {
  foreignKey: 'Combo_id',
});
Items.belongsTo(Combo, {
  foreignKey: 'Combo_id',
});

// 빵 : 제작상품 = 1 : N
Bread.hasMany(Items, {
  foreignKey: 'Bread_id',
});
Items.belongsTo(Bread, {
  foreignKey: 'Bread_id',
});

// 치즈 : 제작상품 = 1 : N
Cheese.hasMany(Items, {
  foreignKey: 'Cheese_id',
});
Items.belongsTo(Cheese, {
  foreignKey: 'Cheese_id',
});

// 메뉴 : 제작상품 = 1 : N
Menu.hasMany(Items, {
  foreignKey: 'Menu_id',
});
Items.belongsTo(Menu, {
  foreignKey: 'Menu_id',
});

// 제작상품 : 야채 = N : M
Items.belongsToMany(Vegetable, {
  through: OrderVegetable,
});
Vegetable.belongsToMany(Items, {
  through: OrderVegetable,
});

// 제작상품 : 추가 = N : M
Items.belongsToMany(Extras, {
  through: OrderExtras,
});
Extras.belongsToMany(Items, {
  through: OrderExtras,
});

// 제작상품 : 소스 = N : M
Items.belongsToMany(Sauce, {
  through: OrderSauce,
});
Sauce.belongsToMany(Items, {
  through: OrderSauce,
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
