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
exports.weather = void 0;
const url = "https://api.openweathermap.org/data/2.5/weather";
const weather = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const params = new URLSearchParams();
    params.append("appid", (_a = process.env.Weather) !== null && _a !== void 0 ? _a : "");
    params.append("lat", String(lat));
    params.append("lon", String(lon));
    params.append("units", "metric");
    params.append("lang", "es");
    const resp = yield fetch(`${url}?${params.toString()}`);
    const weatherResp = yield resp.json();
    const weatherDes = (_b = weatherResp.weather.at(0)) === null || _b === void 0 ? void 0 : _b.description;
    return {
        temp: Math.round(weatherResp.main.temp),
        location: weatherResp.name,
        weather: `${(_c = weatherDes === null || weatherDes === void 0 ? void 0 : weatherDes.at(0)) === null || _c === void 0 ? void 0 : _c.toUpperCase()}${weatherDes === null || weatherDes === void 0 ? void 0 : weatherDes.slice(1)}`,
        icon: `https://openweathermap.org/img/wn/${(_d = weatherResp.weather.at(0)) === null || _d === void 0 ? void 0 : _d.icon}@2x.png`,
    };
});
exports.weather = weather;
