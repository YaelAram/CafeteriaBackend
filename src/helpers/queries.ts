import { AgeType, Drink, DrinkType, Temp, TempType } from "../interfaces";
import { Sale } from "../model";

const getAgeTempP = async (
  key: string,
  { filter: age }: AgeType,
  { filter: temperature }: TempType
) => {
  return Promise.all([Promise.resolve(key), Sale.find({ age, temperature })]);
};

export const getTempByAge = (age: AgeType) => {
  return Promise.all([
    getAgeTempP(`${age.key}${Temp.FREEZE.key}`, age, Temp.FREEZE),
    getAgeTempP(`${age.key}${Temp.COLD.key}`, age, Temp.COLD),
    getAgeTempP(`${age.key}${Temp.COOL.key}`, age, Temp.COOL),
    getAgeTempP(`${age.key}${Temp.MILD.key}`, age, Temp.MILD),
    getAgeTempP(`${age.key}${Temp.HOT.key}`, age, Temp.HOT),
    getAgeTempP(`${age.key}${Temp.BOILING.key}`, age, Temp.BOILING),
  ]);
};

const getAgeTempDrink = async (
  key: string,
  { filter: age }: AgeType,
  { filter: temperature }: TempType,
  { filter: drink }: DrinkType
) => {
  return Promise.all([
    Promise.resolve(key),
    Sale.find({ age, temperature, drink }),
  ]);
};

export const getTempDrinkByAge = (age: AgeType) => {
  return Promise.all([
    getAgeTempDrink(
      `${age.key}${Temp.FREEZE.key}${Drink.COLD.key}`,
      age,
      Temp.FREEZE,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.FREEZE.key}${Drink.HOT.key}`,
      age,
      Temp.FREEZE,
      Drink.HOT
    ),

    getAgeTempDrink(
      `${age.key}${Temp.COLD.key}${Drink.COLD.key}`,
      age,
      Temp.COLD,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.COLD.key}${Drink.HOT.key}`,
      age,
      Temp.COLD,
      Drink.HOT
    ),

    getAgeTempDrink(
      `${age.key}${Temp.COOL.key}${Drink.COLD.key}`,
      age,
      Temp.COOL,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.COOL.key}${Drink.HOT.key}`,
      age,
      Temp.COOL,
      Drink.HOT
    ),

    getAgeTempDrink(
      `${age.key}${Temp.MILD.key}${Drink.COLD.key}`,
      age,
      Temp.MILD,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.MILD.key}${Drink.HOT.key}`,
      age,
      Temp.MILD,
      Drink.HOT
    ),

    getAgeTempDrink(
      `${age.key}${Temp.HOT.key}${Drink.COLD.key}`,
      age,
      Temp.HOT,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.HOT.key}${Drink.HOT.key}`,
      age,
      Temp.HOT,
      Drink.HOT
    ),

    getAgeTempDrink(
      `${age.key}${Temp.BOILING.key}${Drink.COLD.key}`,
      age,
      Temp.BOILING,
      Drink.COLD
    ),
    getAgeTempDrink(
      `${age.key}${Temp.BOILING.key}${Drink.HOT.key}`,
      age,
      Temp.BOILING,
      Drink.HOT
    ),
  ]);
};
