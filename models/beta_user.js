const Sequelize = require('sequelize');

module.exports = class beta_user extends Sequelize.Model {
  // 회원
  static init(sequelize) {
    return super.init(
      {
        beta_user_id: {
          // 임시 유저
          type: Sequelize.STRING,
          allowNull: true,
        },
        order_id: {
          // 주문번호
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
