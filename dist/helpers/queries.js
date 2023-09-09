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
exports.getTempDrinkByAge = exports.getTempByAge = void 0;
const interfaces_1 = require("../interfaces");
const model_1 = require("../model");
const getAgeTempP = (key, { filter: age }, { filter: temperature }) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([Promise.resolve(key), model_1.Sale.find({ age, temperature })]);
});
const getTempByAge = (age) => {
    return Promise.all([
        getAgeTempP(`${age.key}${interfaces_1.Temp.FREEZE.key}`, age, interfaces_1.Temp.FREEZE),
        getAgeTempP(`${age.key}${interfaces_1.Temp.COLD.key}`, age, interfaces_1.Temp.COLD),
        getAgeTempP(`${age.key}${interfaces_1.Temp.COOL.key}`, age, interfaces_1.Temp.COOL),
        getAgeTempP(`${age.key}${interfaces_1.Temp.MILD.key}`, age, interfaces_1.Temp.MILD),
        getAgeTempP(`${age.key}${interfaces_1.Temp.HOT.key}`, age, interfaces_1.Temp.HOT),
        getAgeTempP(`${age.key}${interfaces_1.Temp.BOILING.key}`, age, interfaces_1.Temp.BOILING),
    ]);
};
exports.getTempByAge = getTempByAge;
const getAgeTempDrink = (key, { filter: age }, { filter: temperature }, { filter: drink }) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        Promise.resolve(key),
        model_1.Sale.find({ age, temperature, drink }),
    ]);
});
const getTempDrinkByAge = (age) => {
    return Promise.all([
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.FREEZE.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.FREEZE, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.FREEZE.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.FREEZE, interfaces_1.Drink.HOT),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.COLD.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.COLD, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.COLD.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.COLD, interfaces_1.Drink.HOT),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.COOL.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.COOL, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.COOL.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.COOL, interfaces_1.Drink.HOT),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.MILD.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.MILD, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.MILD.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.MILD, interfaces_1.Drink.HOT),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.HOT.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.HOT, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.HOT.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.HOT, interfaces_1.Drink.HOT),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.BOILING.key}${interfaces_1.Drink.COLD.key}`, age, interfaces_1.Temp.BOILING, interfaces_1.Drink.COLD),
        getAgeTempDrink(`${age.key}${interfaces_1.Temp.BOILING.key}${interfaces_1.Drink.HOT.key}`, age, interfaces_1.Temp.BOILING, interfaces_1.Drink.HOT),
    ]);
};
exports.getTempDrinkByAge = getTempDrinkByAge;
