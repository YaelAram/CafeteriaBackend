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
exports.getLikelihood = exports.getAgeTemperatureDinkP = exports.getAgeTemperatureP = exports.getColdHotDrinkP = void 0;
const interfaces_1 = require("../interfaces");
const model_1 = require("../model");
const getColdHotDrinkP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    const drinkP = new Map();
    const coldDrinkPeople = yield model_1.Sale.find({ drink: interfaces_1.Drink.COLD });
    const coldDrinkP = coldDrinkPeople.length / numberOfSales;
    drinkP.set("cold", coldDrinkP);
    drinkP.set("hot", 1.0 - coldDrinkP);
    return drinkP;
});
exports.getColdHotDrinkP = getColdHotDrinkP;
const getAgeTemperatureP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    const [youngCold, youngMild, youngHot, adultCold, adultMild, adultHot, olderCold, olderMild, olderHot,] = yield Promise.all([
        model_1.Sale.find({ age: interfaces_1.Age.YOUNG, temperature: interfaces_1.Temperature.COLD }),
        model_1.Sale.find({ age: interfaces_1.Age.YOUNG, temperature: interfaces_1.Temperature.MILD }),
        model_1.Sale.find({ age: interfaces_1.Age.YOUNG, temperature: interfaces_1.Temperature.HOT }),
        model_1.Sale.find({ age: interfaces_1.Age.ADULT, temperature: interfaces_1.Temperature.COLD }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.MILD,
        }),
        model_1.Sale.find({ age: interfaces_1.Age.ADULT, temperature: interfaces_1.Temperature.HOT }),
        model_1.Sale.find({ age: interfaces_1.Age.OLDER, temperature: interfaces_1.Temperature.COLD }),
        model_1.Sale.find({ age: interfaces_1.Age.OLDER, temperature: interfaces_1.Temperature.MILD }),
        model_1.Sale.find({ age: interfaces_1.Age.OLDER, temperature: interfaces_1.Temperature.HOT }),
    ]);
    const ageTemperatureP = new Map();
    ageTemperatureP.set("youngCold", youngCold.length / numberOfSales);
    ageTemperatureP.set("youngMild", youngMild.length / numberOfSales);
    ageTemperatureP.set("youngHot", youngHot.length / numberOfSales);
    ageTemperatureP.set("adultCold", adultCold.length / numberOfSales);
    ageTemperatureP.set("adultMild", adultMild.length / numberOfSales);
    ageTemperatureP.set("adultHot", adultHot.length / numberOfSales);
    ageTemperatureP.set("olderCold", olderCold.length / numberOfSales);
    ageTemperatureP.set("olderMild", olderMild.length / numberOfSales);
    ageTemperatureP.set("olderHot", olderHot.length / numberOfSales);
    return ageTemperatureP;
});
exports.getAgeTemperatureP = getAgeTemperatureP;
const getAgeTemperatureDinkP = (numberOfSales) => __awaiter(void 0, void 0, void 0, function* () {
    const [youngColdCold, youngColdHot, youngMildCold, youngMildHot, youngHotCold, youngHotHot, adultColdCold, adultColdHot, adultMildCold, adultMildHot, adultHotCold, adultHotHot, olderColdCold, olderColdHot, olderMildCold, olderMildHot, olderHotCold, olderHotHot,] = yield Promise.all([
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.YOUNG,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.ADULT,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.COLD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.MILD,
            drink: interfaces_1.Drink.HOT,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.COLD,
        }),
        model_1.Sale.find({
            age: interfaces_1.Age.OLDER,
            temperature: interfaces_1.Temperature.HOT,
            drink: interfaces_1.Drink.HOT,
        }),
    ]);
    const ageTemperatureDrinkP = new Map();
    ageTemperatureDrinkP.set("youngColdCold", youngColdCold.length / numberOfSales);
    ageTemperatureDrinkP.set("youngColdHot", youngColdHot.length / numberOfSales);
    ageTemperatureDrinkP.set("youngMildCold", youngMildCold.length / numberOfSales);
    ageTemperatureDrinkP.set("youngMildHot", youngMildHot.length / numberOfSales);
    ageTemperatureDrinkP.set("youngHotCold", youngHotCold.length / numberOfSales);
    ageTemperatureDrinkP.set("youngHotHot", youngHotHot.length / numberOfSales);
    ageTemperatureDrinkP.set("adultColdCold", adultColdCold.length / numberOfSales);
    ageTemperatureDrinkP.set("adultColdHot", adultColdHot.length / numberOfSales);
    ageTemperatureDrinkP.set("adultMildCold", adultMildCold.length / numberOfSales);
    ageTemperatureDrinkP.set("adultMildHot", adultMildHot.length / numberOfSales);
    ageTemperatureDrinkP.set("adultHotCold", adultHotCold.length / numberOfSales);
    ageTemperatureDrinkP.set("adultHotHot", adultHotHot.length / numberOfSales);
    ageTemperatureDrinkP.set("olderColdCold", olderColdCold.length / numberOfSales);
    ageTemperatureDrinkP.set("olderColdHot", olderColdHot.length / numberOfSales);
    ageTemperatureDrinkP.set("olderMildCold", olderMildCold.length / numberOfSales);
    ageTemperatureDrinkP.set("olderMildHot", olderMildHot.length / numberOfSales);
    ageTemperatureDrinkP.set("olderHotCold", olderHotCold.length / numberOfSales);
    ageTemperatureDrinkP.set("olderHotHot", olderHotHot.length / numberOfSales);
    return ageTemperatureDrinkP;
});
exports.getAgeTemperatureDinkP = getAgeTemperatureDinkP;
const getLikelihood = (drinkP, ageTempDrinkP) => {
    const likelihood = new Map();
    for (const [key, value] of ageTempDrinkP.entries()) {
        const drinkTypeP = key.endsWith("Cold")
            ? drinkP.get("cold")
            : drinkP.get("hot");
        const likelihoodP = value / drinkTypeP;
        likelihood.set(key, likelihoodP);
    }
    return likelihood;
};
exports.getLikelihood = getLikelihood;
