const Sequelize = require('sequelize');

module.exports = class Combo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        combo_id: {
          // 결제수단식별자(PK)
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        combo_name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        combo_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        combo_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Combo',
        tableName: 'combo',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
