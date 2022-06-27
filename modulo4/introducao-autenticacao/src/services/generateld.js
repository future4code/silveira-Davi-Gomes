"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const uuid_1 = require("uuid");
function generateId() {
    return (0, uuid_1.v4)();
}
exports.generateId = generateId;
