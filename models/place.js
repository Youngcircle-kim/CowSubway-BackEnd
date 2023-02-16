const Sequelize = require('sequelize');

module.exports = class Place extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        place_id: {
          //식사장소식별자(PK)
          type: Sequelize.INTEGER,

          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Place',
        tableName: 'place',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
