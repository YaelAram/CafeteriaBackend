import { Router } from "express";
import {
  createSale,
  deleteSale,
  getAllSales,
  updateSale,
} from "../controllers";

export const salesRouter = Router();

salesRouter.get("/", getAllSales);

salesRouter.post("/", createSale);

salesRouter.put("/:id", updateSale);

salesRouter.delete("/:id", deleteSale);

// salesRouter.get("/create", createSales);
