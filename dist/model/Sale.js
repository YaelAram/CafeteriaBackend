"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const mongoose_1 = require("mongoose");
const saleSchema = new mongoose_1.Schema({
    age: { type: Number, required: true },
    temperature: { type: Number, required: true },
    drink: { type: Number, required: true },
});
saleSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password, state, _id } = _a, user = __rest(_a, ["__v", "password", "state", "_id"]);
    user.uid = _id;
    return user;
};
exports.Sale = (0, mongoose_1.model)("Sale", saleSchema);
