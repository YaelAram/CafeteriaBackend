import { Request, Response } from "express";

import {
  checkCreateModel,
  getAgeTemperatureDinkP,
  getAgeTemperatureP,
  getColdHotDrinkP,
  getLikelihood,
  guess,
} from "../helpers";
import { Sale } from "../model";

let response: {
  sales: number;
  createdAt: number;
  model?: any;
} = {
  sales: -1,
  createdAt: -1,
};

export const createModel = async (req: Request, res: Response) => {
  const { newModel = false } = req.body;

  if (checkCreateModel(newModel, response.createdAt)) {
    const numberOfSales = await Sale.countDocuments();
    const [drinkP, ageTemperatureP, ageTemperatureDrinkP] = await Promise.all([
      getColdHotDrinkP(numberOfSales),
      getAgeTemperatureP(numberOfSales),
      getAgeTemperatureDinkP(numberOfSales),
    ]);
    const likelihoodP = getLikelihood(drinkP, ageTemperatureDrinkP);

    response = {
      sales: numberOfSales,
      createdAt: new Date().getTime(),
      model: guess(drinkP, ageTemperatureP, likelihoodP),
    };
  }

  res.status(200).json(response);
};
