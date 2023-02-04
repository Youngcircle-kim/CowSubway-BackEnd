const Sequelize = require('sequelize');

class Extras extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        extras_id: {
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
        extras_img: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        extras_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Extras',
        tableName: 'extras',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
}

module.exports = Extras;
