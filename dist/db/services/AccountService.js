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
exports.deleteAccount = exports.editAccount = exports.createAccount = exports.getAccounts = void 0;
const Users = require("../models/Users");
const Accounts = require("../models/Accounts");
function getAccounts(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const myAccounts = yield Accounts.findAll({ where: { user_id: myUser.id } });
            return myAccounts;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getAccounts = getAccounts;
function createAccount(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { fornecedor, descricao, valor, vencimento, status, user_id, recorrente } = body;
            const user = yield Users.findOne({ where: { username: user_id } });
            if (user) {
                const newAccount = yield Accounts.create({ fornecedor, descricao, valor, vencimento, status, user_id: user.id, recorrente });
                return newAccount;
            }
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.createAccount = createAccount;
function editAccount(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, fornecedor, descricao, valor, vencimento, status, user_id, recorrente } = body;
            const account = yield Accounts.findOne({ where: { id } });
            const newAccount = yield account.update({ fornecedor, descricao, valor, vencimento, status, user_id, recorrente });
            return newAccount;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.editAccount = editAccount;
function deleteAccount(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = body;
            const deletedAccount = yield Accounts.destroy({ where: { id } });
            return deletedAccount;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.deleteAccount = deleteAccount;
//# sourceMappingURL=AccountService.js.map