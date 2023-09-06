"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require("sequelize");
const NewModel = Model;
const NewDatatypes = DataTypes;
class Accounts extends NewModel {
    static init(sequelize) {
        super.init({
            id: { type: NewDatatypes.INTEGER, primaryKey: true, autoIncrement: true },
            fornecedor: NewDatatypes.STRING,
            descricao: NewDatatypes.STRING,
            valor: NewDatatypes.FLOAT,
            vencimento: NewDatatypes.DATE,
            status: NewDatatypes.STRING,
            recorrente: NewDatatypes.BOOLEAN,
            user_id: { type: DataTypes.INTEGER, allowNull: true },
        }, {
            timestamps: false,
            tableName: "Accounts",
            underscored: true,
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    }
}
module.exports = Accounts;
//# sourceMappingURL=Accounts.js.map