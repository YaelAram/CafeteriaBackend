import { Request, Response } from "express";
import { Sale } from "../model";

export const getAllSales = async (req: Request, res: Response) => {
  const { limit = 5, offset = 0 } = req.query;

  const [salesCount, sales] = await Promise.all([
    Sale.countDocuments(),
    Sale.find().skip(Number(offset)).limit(Number(limit)),
  ]);

  res.status(200).json({
    salesCount,
    sales,
  });
};

export const createSale = async (req: Request, res: Response) => {
  const { age, temperature, drink } = req.body;

  const sale = new Sale({ age, temperature, drink });
  await sale.save();

  res.status(201).json({ sale });
};

export const updateSale = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { age, temperature, drink } = req.body;

  const sale = await Sale.findByIdAndUpdate(
    id,
    { age, temperature, drink },
    { new: true }
  );

  res.status(200).json({ sale });
};

export const deleteSale = async (req: Request, res: Response) => {
  const { id } = req.params;

  const sale = await Sale.findByIdAndDelete(id);
  res.status(200).json({ sale });
};
