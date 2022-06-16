"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = require("./createUser");
const getUser_1 = require("./getUser");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//1)
app.get("/users/:cep", getUser_1.getUser);
//2)
// CREATE TABLE users_cep (
// 	id VARCHAR(255) PRIMARY KEY,
//  cep INT NOT NULL,
//  numero INT NOT NULL, 
//  bairro VARCHAR(255),
//  cidade VARCHAR(255),
//  estado VARCHAR(255)
// )
//3)
app.post("/users/", createUser_1.createUser);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
