export const guess = (
  drinkP: Map<string, number>,
  ageTemperatureP: Map<string, number>,
  likelihoodP: Map<string, number>
) => {
  const guessModel = new Map<string, number>();

  for (const ageTemp of ageTemperatureP.keys()) {
    const ageTempColdP =
      (drinkP.get("cold")! * likelihoodP.get(`${ageTemp}Cold`)!) /
      ageTemperatureP.get(ageTemp)!;
    const ageTempHotP =
      (drinkP.get("hot")! * likelihoodP.get(`${ageTemp}Hot`)!) /
      ageTemperatureP.get(ageTemp)!;

    guessModel.set(`${ageTemp}Cold`, ageTempColdP);
    guessModel.set(`${ageTemp}Hot`, ageTempHotP);
  }

  return Object.fromEntries(guessModel.entries());
};
