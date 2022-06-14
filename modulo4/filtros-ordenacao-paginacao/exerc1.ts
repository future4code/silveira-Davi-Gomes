import { Request, Response } from "express";
import { connection } from "./connection";
import { user } from "./types";

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const users = await selectAllUsers()

//         if (!users.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(users)

//     } catch (error: any) {
//         console.log(error)
//         res.send(error.message || error.sqlMessage)
//     }
// };

// export default async function selectAllUsers(): Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio;
//     `)

//     return result[0]
// };

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const name = req.query.name
        if (!name) {
            throw new Error('Name not found')
        }
        const response = await connection('aula49_exercicio') 
        .select('*')
        .where('name', 'LIKE', `%${name}%`)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
};


export async function getOrderByType(req: Request, res: Response): Promise<void> {
    try {
        const orderby = req.query.orderby as string
        if (!orderby) {
            throw new Error('Type not found')
        }
        const response = await connection('aula49_exercicio') 
        .select('*')
        .orderBy(orderby)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}