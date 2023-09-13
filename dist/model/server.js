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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const routes_1 = require("../routes");
class Server {
    constructor() {
        var _a;
        this.salesPath = "/api/sales";
        this.guessPath = "/api/guess";
        this.weatherPath = "/api/weather";
        this.app = (0, express_1.default)();
        this.PORT = Number((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080");
        this.conectDB();
        this.middlewares();
        this.routes();
    }
    conectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, database_1.conectToDataBase)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.salesPath, routes_1.salesRouter);
        this.app.use(this.guessPath, routes_1.guessRouter);
        this.app.use(this.weatherPath, routes_1.weatherRouter);
    }
    listen() {
        this.app.listen(this.PORT, () => console.log(`Listening at port ${this.PORT}`));
    }
}
exports.Server = Server;
