"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenDecode = exports.tokenGenerate = void 0;
const jwt = require("jsonwebtoken");
require('dotenv/config');
const secret = process.env.JWT_SECRET;
const tokenGenerate = (user) => {
    const jwtConfig = {
        expiresIn: "1d",
        algorithm: "HS256",
    };
    const token = jwt.sign({ data: { userId: user } }, secret, jwtConfig);
    return token;
};
exports.tokenGenerate = tokenGenerate;
const tokenDecode = (userToken) => {
    const token = jwt.verify(userToken, secret);
    return token.data;
};
exports.tokenDecode = tokenDecode;
//# sourceMappingURL=jwt.js.map