"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Age = exports.Temp = exports.Drink = void 0;
exports.Drink = {
    COLD: { key: "Cold", filter: 0 },
    HOT: { key: "Hot", filter: 1 },
};
exports.Temp = {
    FREEZE: { key: "Freeze", filter: { $lte: 0 } },
    COLD: { key: "Cold", filter: { $gt: 0, $lte: 10 } },
    COOL: { key: "Cool", filter: { $gt: 10, $lte: 20 } },
    MILD: { key: "Mild", filter: { $gt: 20, $lte: 30 } },
    HOT: { key: "Hot", filter: { $gt: 30, $lte: 40 } },
    BOILING: { key: "Boiling", filter: { $gt: 40 } },
};
exports.Age = {
    CHILD: { key: "Child", filter: { $gte: 0, $lte: 12 } },
    TEEN: { key: "Teen", filter: { $gt: 12, $lte: 20 } },
    YOUNG: { key: "Young", filter: { $gt: 20, $lte: 30 } },
    MIDDLE: { key: "Middle", filter: { $gt: 30, $lte: 40 } },
    ADULT: { key: "Adult", filter: { $gt: 40, $lte: 60 } },
    RETIRED: { key: "Retired", filter: { $gt: 60, $lte: 80 } },
    OLDER: { key: "Older", filter: { $gte: 80 } },
};
