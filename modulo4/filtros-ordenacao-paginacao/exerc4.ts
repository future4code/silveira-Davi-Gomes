import { Request, Response } from "express";
import { connection } from "./connection";


export async function getAllDate(req: Request, res: Response): Promise<void> {
    try {
        const name = req.query.name as string || ''
        const orderBy = req.query.orderBy as string || 'email'
        const orderType = req.query.orderType as string || 'ASC'
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)
        const response = await connection('aula49_exercicio')
            .select('*')
            .where('name', 'LIKE', `%${name}%`)
            .orderBy(orderBy, orderType)
            .limit(5)
            .offset(offset)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}