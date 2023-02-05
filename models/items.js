const Sequelize = require('sequelize');

class Items extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        item_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        count: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        comment: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Items',
        tableName: 'items',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}

module.exports = Items;
