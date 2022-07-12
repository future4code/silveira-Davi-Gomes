import { Request, Response } from "express";
import insertAdress from "../data/insertAdress";
import { getAdressInfo } from "../services/getAdressinfo";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {cep} = req.body.cep;
        const address = await getAdressInfo(cep);

        if(!address) {
            throw new Error("CEP não encontrado");
        }

        await insertAdress(address);

        res.status(201).send("address created");
    } catch (error: any) {
        console.log(error.message);        
    }
}