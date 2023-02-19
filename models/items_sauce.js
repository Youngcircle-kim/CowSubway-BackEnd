const Sequelize = require('sequelize');

class ItemsSauce extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Items_Sauce',
        tableName: 'items_Sauce',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = ItemsSauce;
