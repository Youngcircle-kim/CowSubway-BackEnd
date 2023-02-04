const Sequelize = require('sequelize');

class Menu extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        name_en: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        kcal: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Menu',
        tableName: 'menu',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}

module.exports = Menu;
