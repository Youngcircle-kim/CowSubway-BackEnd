const Sequelize = require('sequelize');

class ItemsVegetable extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Items_vegetable',
        tableName: 'items_vegetable',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = ItemsVegetable;
