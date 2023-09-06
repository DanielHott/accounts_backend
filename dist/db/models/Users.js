"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes, InferAttributes, ModelStatic } = require("sequelize");
class Users extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            timestamps: false,
            tableName: "Users",
            underscored: true,
            sequelize
        });
    }
}
module.exports = Users;
//# sourceMappingURL=Users.js.map