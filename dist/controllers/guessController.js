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
exports.createModel = void 0;
const helpers_1 = require("../helpers");
const model_1 = require("../model");
let response = {
    sales: -1,
    createdAt: -1,
};
const createModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newModel = false } = req.body;
    if ((0, helpers_1.checkCreateModel)(newModel, response.createdAt)) {
        const numberOfSales = yield model_1.Sale.countDocuments();
        const [drinkP, ageTemperatureP, ageTemperatureDrinkP] = yield Promise.all([
            (0, helpers_1.getColdHotDrinkP)(numberOfSales),
            (0, helpers_1.getAgeTemperatureP)(numberOfSales),
            (0, helpers_1.getAgeTemperatureDinkP)(numberOfSales),
        ]);
        const likelihoodP = (0, helpers_1.getLikelihood)(drinkP, ageTemperatureDrinkP);
        response = {
            sales: numberOfSales,
            createdAt: new Date().getTime(),
            model: (0, helpers_1.guess)(drinkP, ageTemperatureP, likelihoodP),
        };
    }
    res.status(200).json(response);
});
exports.createModel = createModel;
