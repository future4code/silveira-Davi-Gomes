import { Request, Response } from "express";
import { connection } from "./connection";


export async function getPage(req: Request, res: Response): Promise<void> {
    try {
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)
        const response = await connection('aula49_exercicio')
            .limit(5)
            .offset(offset)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}