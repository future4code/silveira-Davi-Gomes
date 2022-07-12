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
const getUserByEmail_1 = require("../endpoints/getUserByEmail");
const Authenticator_1 = __importDefault(require("../services/Authenticator"));
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error('Invalid email');
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error('Invalid password');
            }
            const userId = {
                email,
                password,
            };
            res.status(200).send('jwt generated token');
            const user = yield (0, getUserByEmail_1.getUserByEmail)(userId.email);
            const token = new Authenticator_1.default().generateToken({
                id: user.id,
            });
            res.status(200).send({ token });
        }
        catch (error) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    });
}
exports.default = login;
