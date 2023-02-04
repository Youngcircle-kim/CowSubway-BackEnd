const Sequelize = require('sequelize');

module.exports = class Combo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        combo_id: {
          //결제수단식별자(PK)
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Combo',
        tableName: 'combo',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
