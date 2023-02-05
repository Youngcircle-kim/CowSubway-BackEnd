const Sequelize = require('sequelize');

module.exports = class sauce extends Sequelize.Model {
  // 회원
  static init(sequelize) {
    return super.init(
      {
        sauce_id: {
          // 소스종류
          type: Sequelize.STRING,
          allowNull: true,
        },
        sauce_name: {
          // 소스종류별 이름
          type: Sequelize.STRING,
          allowNull: true,
        },
        sauce_img: {
          // 소스 종류별 사진
          type: Sequelize.STRING,
          allowNull: true,
        },
        sauce_price: {
          // 소스 가격
          type: Sequelize.STRING,
          allowNull: false,
        },
        order_id: {
          // 주문 번호
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
};
