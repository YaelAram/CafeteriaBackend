import { Request, Response } from "express";
import { weather } from "../services";

export const getWeather = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;

  const currentWeather = await weather(lat, lon);

  res.status(200).json(currentWeather);
};
