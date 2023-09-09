import { Drink } from "../interfaces";

export const guess = (
  drinkP: Map<string, number>,
  ageTempP: Map<string, number>,
  likelihoodP: Map<string, number>
) => {
  const guessModel = new Map<string, number>();
  const { key: cold } = Drink.COLD;
  const { key: hot } = Drink.HOT;

  for (const ageTemp of ageTempP.keys()) {
    const guessCold = `${ageTemp}${cold}`;
    const guessHot = `${ageTemp}${hot}`;
    const ageTempColdP =
      (drinkP.get(cold)! * likelihoodP.get(guessCold)!) /
      ageTempP.get(ageTemp)!;
    const ageTempHotP =
      (drinkP.get(hot)! * likelihoodP.get(guessHot)!) / ageTempP.get(ageTemp)!;

    guessModel.set(guessCold, Number(ageTempColdP.toFixed(8)));
    guessModel.set(guessHot, Number(ageTempHotP.toFixed(8)));
  }

  return Object.fromEntries(guessModel.entries());
};
