"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Age = exports.Temperature = exports.Drink = void 0;
exports.Drink = {
    COLD: 0,
    HOT: 1,
};
exports.Temperature = {
    COLD: { $lte: 10 },
    MILD: { $gt: 10, $lt: 20 },
    HOT: { $gte: 20 },
};
exports.Age = {
    YOUNG: { $lt: 18 },
    ADULT: { $gte: 18, $lt: 60 },
    OLDER: { $gte: 60 },
};
