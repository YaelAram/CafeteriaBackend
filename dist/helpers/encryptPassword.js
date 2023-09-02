"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const encryptPassword = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)(15);
    return (0, bcryptjs_1.hashSync)(password, salt);
};
exports.encryptPassword = encryptPassword;
