"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.checkJWT = exports.getLogin = void 0;
const jwt_1 = require("../token/jwt");
const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/database");
const Accounts = require("../models/Accounts");
const bcrypt = require("bcrypt");
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config);
function getLogin(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = body;
            const myUser = yield Users.findOne({ where: { username } });
            if (myUser) {
                const hashPass = yield bcrypt.compare(password, myUser.password);
                if (hashPass)
                    return myUser;
                if (!hashPass)
                    return null;
            }
            return null;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getLogin = getLogin;
function checkJWT(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const decoded = (0, jwt_1.tokenDecode)(token);
            return (decoded);
            /*     const myUser = await Users.findOne({ where: { username } });
                if(myUser) return myUser;
                return null; */
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.checkJWT = checkJWT;
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield sequelize.transaction();
        try {
            const { username, password } = body;
            const hashPass = yield bcrypt.hash(password, 0);
            const user = yield Users.findOne({ where: { username } });
            if (!user) {
                const create = yield Users.create({ username, password: hashPass }, { transaction: t });
                yield t.commit();
                return create;
            }
            yield t.rollback();
            return null;
        }
        catch (e) {
            yield t.rollback();
            console.log(e);
            throw e;
        }
    });
}
exports.createUser = createUser;
//# sourceMappingURL=UsersService.js.map