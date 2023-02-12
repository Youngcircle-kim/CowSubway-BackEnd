const Sequelize = require('sequelize');

class OrderTopping extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Order_Topping',
        tableName: 'order_topping',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = OrderTopping;
