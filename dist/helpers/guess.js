"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guess = void 0;
const interfaces_1 = require("../interfaces");
const guess = (drinkP, ageTempP, likelihoodP) => {
    const guessModel = new Map();
    const { key: cold } = interfaces_1.Drink.COLD;
    for (const ageTemp of ageTempP.keys()) {
        const guessCold = `${ageTemp}${cold}`;
        const ageTempColdP = (drinkP.get(cold) * likelihoodP.get(guessCold)) /
            ageTempP.get(ageTemp);
        guessModel.set(guessCold, Number(ageTempColdP.toFixed(8)));
    }
    return Object.fromEntries(guessModel.entries());
};
exports.guess = guess;
