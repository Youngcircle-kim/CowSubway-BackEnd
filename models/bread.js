const Sequelize = require('sequelize');

class Bread extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        bread_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        bread_name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        bread_name_en: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        bread_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Bread',
        tableName: 'bread',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}

module.exports = Bread;
