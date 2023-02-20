const Sequelize = require('sequelize');

class ItemsSauce extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        SauceSauceId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Items_sauce',
        tableName: 'items_sauce',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = ItemsSauce;
