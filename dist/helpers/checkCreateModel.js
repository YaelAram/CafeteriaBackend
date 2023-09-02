"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCreateModel = void 0;
const checkCreateModel = (createModel, createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    return (createModel ||
        createdAt === -1 ||
        createdDate.getDate() < currentDate.getDate() ||
        createdDate.getMonth() < currentDate.getMonth() ||
        createdDate.getFullYear() < currentDate.getFullYear());
};
exports.checkCreateModel = checkCreateModel;
