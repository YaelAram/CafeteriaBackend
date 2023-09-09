import { getTempByAge, getTempDrinkByAge } from "../helpers";
import { Age, Drink } from "../interfaces";
import { Sale } from "../model";

export const getColdHotDrinkP = async (numberOfSales: number) => {
  const drinkP = new Map<string, number>();
  const { key, filter: drink } = Drink.COLD;
  const coldDrinkPeople = await Sale.find({ drink });
  const coldDrinkP = coldDrinkPeople.length / numberOfSales;

  drinkP.set(key, coldDrinkP);
  drinkP.set(Drink.HOT.key, 1.0 - coldDrinkP);

  return drinkP;
};

export const getAgeTemperatureP = async (numberOfSales: number) => {
  // Cada llamada al metodo getTempByAge hace 6 llamadas, al llamarse 7 veces da un total de 42 consultas
  let results = await Promise.all([
    getTempByAge(Age.CHILD),
    getTempByAge(Age.TEEN),
    getTempByAge(Age.YOUNG),
    getTempByAge(Age.MIDDLE),
    getTempByAge(Age.ADULT),
    getTempByAge(Age.RETIRED),
    getTempByAge(Age.OLDER),
  ]);

  const entries = results.flat(1).map(([key, sales]): [string, number] => {
    const probability = sales.length / numberOfSales;
    return [key, probability];
  });

  return new Map<string, number>(entries);
};

export const getAgeTemperatureDrinkP = async (numberOfSales: number) => {
  // Cada llamada al metodo getTempByAge hace 12 llamadas, al llamarse 7 veces da un total de 84 consultas
  const results = await Promise.all([
    getTempDrinkByAge(Age.CHILD),
    getTempDrinkByAge(Age.TEEN),
    getTempDrinkByAge(Age.YOUNG),
    getTempDrinkByAge(Age.MIDDLE),
    getTempDrinkByAge(Age.ADULT),
    getTempDrinkByAge(Age.RETIRED),
    getTempDrinkByAge(Age.OLDER),
  ]);

  const entries = results.flat(1).map(([key, sales]): [string, number] => {
    const probability = sales.length / numberOfSales;
    return [key, probability];
  });

  return new Map<string, number>(entries);
};

export const getLikelihood = (
  drinkP: Map<string, number>,
  ageTempDrinkP: Map<string, number>
) => {
  const likelihood = new Map<string, number>();

  for (const [key, value] of ageTempDrinkP.entries()) {
    const { key: cold } = Drink.COLD;
    const drinkTypeP = key.endsWith(cold)
      ? drinkP.get(cold)!
      : drinkP.get(Drink.HOT.key)!;
    const likelihoodP = value / drinkTypeP;

    likelihood.set(key, likelihoodP);
  }

  return likelihood;
};
