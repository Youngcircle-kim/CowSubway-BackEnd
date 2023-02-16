const Sequelize = require('sequelize');

class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        order_number: {
          // 주문번호
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        order_price: {
          // 주문 가격
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Order',
        tableName: 'order',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = Order;
