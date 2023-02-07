const Sequelize = require('sequelize');

class Cheese extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cheese_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        cheese_name_kr: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cheese_name_en: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cheese_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Cheese',
        tableName: 'cheese',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = Cheese;
