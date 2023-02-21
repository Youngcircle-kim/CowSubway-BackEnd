const Sequelize = require('sequelize');

class Vegetable extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        vegetable_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        vegetable_name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        vegetable_name_en: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        vegetable_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Vegetable',
        tableName: 'vegetable',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
}

module.exports = Vegetable;
