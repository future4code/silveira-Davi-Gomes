import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import { connection } from "../connection";
import { getData } from "../data/uuid";

export const getUserInformation = async (req: Request, res: Response): Promise<any> => {
    let erroCode = 404
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)

        if (authenticationData.role !== "normal") {
            erroCode = 422
            throw new Error("Access denied")
        }
        const response = await connection("User")
            .where({ id: authenticationData.id })

        res.status(200).send(response)
    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.massage)
    }
}