const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');

class Menu extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        menu_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        menu_category: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        menu_name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        menu_name_en: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        menu_kcal: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        menu_price: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        menu_img: {
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
