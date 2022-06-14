import { Request, Response } from "express";
import { connection } from "./connection";


export async function getOrderBy(req: Request, res: Response): Promise<void> {
    try {
        const orderBy = req.query.orderBy as string || 'email'
        const orderType = req.query.orderType as string || 'ASC'
        const response = await connection('aula49_exercicio') 
        .select('*')
        .orderBy(orderBy, orderType)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}