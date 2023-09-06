const { Model, DataTypes } = require("sequelize");
const NewModel = Model;
const NewDatatypes = DataTypes;

class Accounts extends NewModel {
  static init(sequelize: any) {
    super.init(
      {
        id: { type: NewDatatypes.INTEGER, primaryKey: true, autoIncrement: true },
        fornecedor: NewDatatypes.STRING,
        descricao: NewDatatypes.STRING,
        valor: NewDatatypes.FLOAT,
        vencimento: NewDatatypes.DATE,
        status: NewDatatypes.STRING,
        recorrente: NewDatatypes.BOOLEAN,
        user_id: { type: DataTypes.INTEGER, allowNull: true }, 
      },
      {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: "Accounts",
        underscored: true,
        sequelize
      }
    );
  }
  static associate(models: any) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' })
    }
}

export {};

module.exports = Accounts;


