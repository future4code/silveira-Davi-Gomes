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
exports.profile = void 0;
const getUserByld_1 = require("./getUserByld");
const Authenticator_1 = require("../services/Authenticator");
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    try {
        const authenticationData = (0, Authenticator_1.getData)(token);
        const user = yield (0, getUserByld_1.getUserById)(authenticationData.id);
        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    }
    catch (error) {
        res.status(400).send(error.message || error.sqlMessage);
    }
});
exports.profile = profile;
