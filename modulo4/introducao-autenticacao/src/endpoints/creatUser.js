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
const connection_1 = require("../data/connection");
const generateld_1 = require("../services/generateld");
const Authenticator_1 = __importDefault(require("../services/Authenticator"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            if (!req.body.email || req.body.email.indexOf('@') === -1) {
                throw new Error('Invalid email');
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error('Invalid password');
            }
            res.status(200).send('jwt generated token');
            const id = (0, generateld_1.generateId)();
            const userId = {
                id,
                email,
                password,
            };
            yield (0, connection_1.connection)('User')
                .insert(userId);
            const payload = {
                id: userId.id
            };
            const token = new Authenticator_1.default().generateToken(payload);
            res.status(200).send({ token });
        }
        catch (error) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    });
}
exports.default = createUser;
