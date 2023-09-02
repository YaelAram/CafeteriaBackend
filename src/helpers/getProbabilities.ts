import { Age, Drink, Temperature } from "../interfaces";
import { Sale } from "../model";

export const getColdHotDrinkP = async (numberOfSales: number) => {
  const drinkP = new Map<string, number>();
  const coldDrinkPeople = await Sale.find({ drink: Drink.COLD });
  const coldDrinkP = coldDrinkPeople.length / numberOfSales;

  drinkP.set("cold", coldDrinkP);
  drinkP.set("hot", 1.0 - coldDrinkP);

  return drinkP;
};

export const getAgeTemperatureP = async (numberOfSales: number) => {
  const [
    youngCold,
    youngMild,
    youngHot,
    adultCold,
    adultMild,
    adultHot,
    olderCold,
    olderMild,
    olderHot,
  ] = await Promise.all([
    Sale.find({ age: Age.YOUNG, temperature: Temperature.COLD }),
    Sale.find({ age: Age.YOUNG, temperature: Temperature.MILD }),
    Sale.find({ age: Age.YOUNG, temperature: Temperature.HOT }),
    Sale.find({ age: Age.ADULT, temperature: Temperature.COLD }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.MILD,
    }),
    Sale.find({ age: Age.ADULT, temperature: Temperature.HOT }),
    Sale.find({ age: Age.OLDER, temperature: Temperature.COLD }),
    Sale.find({ age: Age.OLDER, temperature: Temperature.MILD }),
    Sale.find({ age: Age.OLDER, temperature: Temperature.HOT }),
  ]);
  const ageTemperatureP = new Map<string, number>();

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
};

export const getAgeTemperatureDinkP = async (numberOfSales: number) => {
  const [
    youngColdCold,
    youngColdHot,
    youngMildCold,
    youngMildHot,
    youngHotCold,
    youngHotHot,
    adultColdCold,
    adultColdHot,
    adultMildCold,
    adultMildHot,
    adultHotCold,
    adultHotHot,
    olderColdCold,
    olderColdHot,
    olderMildCold,
    olderMildHot,
    olderHotCold,
    olderHotHot,
  ] = await Promise.all([
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.COLD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.COLD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.MILD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.MILD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.HOT,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.YOUNG,
      temperature: Temperature.HOT,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.COLD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.COLD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.MILD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.MILD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.HOT,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.ADULT,
      temperature: Temperature.HOT,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.COLD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.COLD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.MILD,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.MILD,
      drink: Drink.HOT,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.HOT,
      drink: Drink.COLD,
    }),
    Sale.find({
      age: Age.OLDER,
      temperature: Temperature.HOT,
      drink: Drink.HOT,
    }),
  ]);
  const ageTemperatureDrinkP = new Map<string, number>();

  ageTemperatureDrinkP.set(
    "youngColdCold",
    youngColdCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("youngColdHot", youngColdHot.length / numberOfSales);
  ageTemperatureDrinkP.set(
    "youngMildCold",
    youngMildCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("youngMildHot", youngMildHot.length / numberOfSales);
  ageTemperatureDrinkP.set("youngHotCold", youngHotCold.length / numberOfSales);
  ageTemperatureDrinkP.set("youngHotHot", youngHotHot.length / numberOfSales);
  ageTemperatureDrinkP.set(
    "adultColdCold",
    adultColdCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("adultColdHot", adultColdHot.length / numberOfSales);
  ageTemperatureDrinkP.set(
    "adultMildCold",
    adultMildCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("adultMildHot", adultMildHot.length / numberOfSales);
  ageTemperatureDrinkP.set("adultHotCold", adultHotCold.length / numberOfSales);
  ageTemperatureDrinkP.set("adultHotHot", adultHotHot.length / numberOfSales);
  ageTemperatureDrinkP.set(
    "olderColdCold",
    olderColdCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("olderColdHot", olderColdHot.length / numberOfSales);
  ageTemperatureDrinkP.set(
    "olderMildCold",
    olderMildCold.length / numberOfSales
  );
  ageTemperatureDrinkP.set("olderMildHot", olderMildHot.length / numberOfSales);
  ageTemperatureDrinkP.set("olderHotCold", olderHotCold.length / numberOfSales);
  ageTemperatureDrinkP.set("olderHotHot", olderHotHot.length / numberOfSales);

  return ageTemperatureDrinkP;
};

export const getLikelihood = (
  drinkP: Map<string, number>,
  ageTempDrinkP: Map<string, number>
) => {
  const likelihood = new Map<string, number>();

  for (const [key, value] of ageTempDrinkP.entries()) {
    const drinkTypeP = key.endsWith("Cold")
      ? drinkP.get("cold")!
      : drinkP.get("hot")!;
    const likelihoodP = value / drinkTypeP;

    likelihood.set(key, likelihoodP);
  }

  return likelihood;
};
