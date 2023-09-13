import { Router } from "express";
import { getWeather } from "../controllers";

export const weatherRouter = Router();

weatherRouter.get("/", getWeather);
