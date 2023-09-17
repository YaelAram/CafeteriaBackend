"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guessRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.guessRouter = (0, express_1.Router)();
exports.guessRouter.post("/", controllers_1.createModel);
