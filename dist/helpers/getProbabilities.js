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
exports.getLikelihood = exports.getAgeTemperatureDrinkP = exports.getAgeTemperatureP = exports.getColdDrinkP = void 0;
const helpers_1 = require("../helpers");
const interfaces_1 = require("../interfaces");
const model_1 = require("../model");
const getColdDrinkP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    const drinkP = new Map();
    const { key, filter: drink } = interfaces_1.Drink.COLD;
    const coldDrinkPeople = yield model_1.Sale.find({ drink });
    const coldDrinkP = coldDrinkPeople.length / numberOfSales;
    drinkP.set(key, coldDrinkP);
    return drinkP;
});
exports.getColdDrinkP = getColdDrinkP;
const getAgeTemperatureP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    // Cada llamada al metodo getTempByAge hace 6 llamadas, al llamarse 7 veces da un total de 42 consultas
    let results = yield Promise.all([
        (0, helpers_1.getTempByAge)(interfaces_1.Age.CHILD),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.TEEN),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.YOUNG),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.MIDDLE),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.ADULT),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.RETIRED),
        (0, helpers_1.getTempByAge)(interfaces_1.Age.OLDER),
    ]);
    const entries = results.flat(1).map(([key, sales]) => {
        const probability = sales.length / numberOfSales;
        return [key, probability];
    });
    return new Map(entries);
});
exports.getAgeTemperatureP = getAgeTemperatureP;
const getAgeTemperatureDrinkP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    // Cada llamada al metodo getTempByAge hace 6 llamadas, al llamarse 7 veces da un total de 42 consultas
    const results = yield Promise.all([
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.CHILD),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.TEEN),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.YOUNG),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.MIDDLE),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.ADULT),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.RETIRED),
        (0, helpers_1.getTempDrinkByAge)(interfaces_1.Age.OLDER),
    ]);
    const entries = results.flat(1).map(([key, sales]) => {
        const probability = sales.length / numberOfSales;
        return [key, probability];
    });
    return new Map(entries);
});
exports.getAgeTemperatureDrinkP = getAgeTemperatureDrinkP;
const getLikelihood = (drinkP, ageTempDrinkP) => {
    const likelihood = new Map();
    for (const [key, value] of ageTempDrinkP.entries()) {
        const likelihoodP = value / drinkP.get(interfaces_1.Drink.COLD.key);
        likelihood.set(key, likelihoodP);
    }
    return likelihood;
};
exports.getLikelihood = getLikelihood;
