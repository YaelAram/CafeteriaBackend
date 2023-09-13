"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.weatherRouter = (0, express_1.Router)();
exports.weatherRouter.post("/", controllers_1.getWeather);
