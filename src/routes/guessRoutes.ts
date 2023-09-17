import { Router } from "express";
import { createModel } from "../controllers";

export const guessRouter = Router();

guessRouter.post("/", createModel);
