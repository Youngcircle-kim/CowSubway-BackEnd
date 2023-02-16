const Sequelize = require('sequelize');

class Recommend extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        recommend_id: {
          // 추천 소스 식별자
          type: Sequelize.INTEGER,
          
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Recommend',
        tableName: 'recommend',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = Recommend;
