const Sequelize = require('sequelize');

module.exports = class PayType extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        payType: {
          //결제수단식별자(PK)
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        method_name: {
          //결제수단이름
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'PayType',
        tableName: 'payType',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
