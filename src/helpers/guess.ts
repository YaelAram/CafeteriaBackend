import { Drink } from "../interfaces";

export const guess = (
  drinkP: Map<string, number>,
  ageTempP: Map<string, number>,
  likelihoodP: Map<string, number>
) => {
  const guessModel = new Map<string, number>();
  const { key: cold } = Drink.COLD;

  for (const ageTemp of ageTempP.keys()) {
    const guessCold = `${ageTemp}${cold}`;
    const ageTempColdP =
      (drinkP.get(cold)! * likelihoodP.get(guessCold)!) /
      ageTempP.get(ageTemp)!;

    guessModel.set(guessCold, Number(ageTempColdP.toFixed(8)));
  }

  return Object.fromEntries(guessModel.entries());
};
