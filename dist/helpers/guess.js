"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guess = void 0;
const guess = (drinkP, ageTemperatureP, likelihoodP) => {
    const guessModel = new Map();
    console.log(likelihoodP);
    for (const ageTemp of ageTemperatureP.keys()) {
        const ageTempColdP = (drinkP.get("cold") * likelihoodP.get(`${ageTemp}Cold`)) /
            ageTemperatureP.get(ageTemp);
        const ageTempHotP = (drinkP.get("hot") * likelihoodP.get(`${ageTemp}Hot`)) /
            ageTemperatureP.get(ageTemp);
        console.log(`Cold: ${drinkP.get("cold")} -> Likelihood: ${likelihoodP.get(`${ageTemp}Cold`)} -> AgeTemp: ${ageTemperatureP.get(ageTemp)}`);
        console.log(`Hot: ${drinkP.get("hot")} -> Likelihood: ${likelihoodP.get(`${ageTemp}Hot`)} -> AgeTemp: ${ageTemperatureP.get(ageTemp)}`);
        guessModel.set(`${ageTemp}Cold`, ageTempColdP);
        guessModel.set(`${ageTemp}Hot`, ageTempHotP);
    }
    return Object.fromEntries(guessModel.entries());
};
exports.guess = guess;
