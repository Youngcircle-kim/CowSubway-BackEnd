const Sequelize = require('sequelize');

class Topping extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        topping_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        topping_name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        topping_name_en: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        topping_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        topping_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Topping',
        tableName: 'topping',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
}

module.exports = Topping;
