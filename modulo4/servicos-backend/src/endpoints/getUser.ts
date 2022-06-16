import { Request, Response } from "express";
import axios from "axios";
import { getAdressInfo } from "../services/getAdressinfo";

export const getUser = async (req: Request, res: Response): Promise<any> => {
    try{
        const cep = req.params.cep;
        const address = await getAdressInfo(cep);

        res.send(address);
    }catch(error: any){
        console.log(error.message);
    }
}