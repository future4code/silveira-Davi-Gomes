"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const creatUser_1 = __importDefault(require("../endpoints/creatUser"));
const login_1 = __importDefault(require("../endpoints/login"));
const profile_1 = require("../endpoints/profile");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/user/signup', creatUser_1.default);
app.post('/user/login', login_1.default);
app.get('/user/profile', profile_1.profile);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
