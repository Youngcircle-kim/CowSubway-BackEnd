const Sequelize = require('sequelize');

module.exports = class Method extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        method_id: {
          //결제수단식별자(PK)
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        method_name: {
          //결제수단이름
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Method',
        tableName: 'method',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
