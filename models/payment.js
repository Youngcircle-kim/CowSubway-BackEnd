const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');

class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        payType: {
          // 결제식별자
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        payment_price: {
          //결제가격
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Payment',
        tableName: 'payment',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // static associate(db) {
  //   db.Payment.hasOne(db.Method, {})
  // }
}

module.exports = Payment;
