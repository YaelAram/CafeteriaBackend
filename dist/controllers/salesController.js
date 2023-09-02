"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.updateSale = exports.createSale = exports.getAllSales = void 0;
const model_1 = require("../model");
const getAllSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, offset = 0 } = req.query;
    const [salesCount, sales] = yield Promise.all([
        model_1.Sale.countDocuments(),
        model_1.Sale.find().skip(Number(offset)).limit(Number(limit)),
    ]);
    res.status(200).json({
        salesCount,
        sales,
    });
});
exports.getAllSales = getAllSales;
const createSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { age, temperature, drink } = req.body;
    const sale = new model_1.Sale({ age, temperature, drink });
    yield sale.save();
    res.status(201).json({ sale });
});
exports.createSale = createSale;
const updateSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { age, temperature, drink } = req.body;
    const sale = yield model_1.Sale.findByIdAndUpdate(id, { age, temperature, drink }, { new: true });
    res.status(200).json({ sale });
});
exports.updateSale = updateSale;
const deleteSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const sale = yield model_1.Sale.findByIdAndDelete(id);
    res.status(200).json({ sale });
});
exports.deleteSale = deleteSale;
