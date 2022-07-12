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
exports.createUser = void 0;
const insertAdress_1 = __importDefault(require("../data/insertAdress"));
const getAdressinfo_1 = require("../services/getAdressinfo");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cep } = req.body.cep;
        const address = yield (0, getAdressinfo_1.getAdressInfo)(cep);
        if (!address) {
            throw new Error("CEP não encontrado");
        }
        yield (0, insertAdress_1.default)(address);
        res.status(201).send("address created");
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.createUser = createUser;
