import { Request, Response } from "express";
import { connection } from "../connection";

export const getUserByEmail = async (email: string): Promise<any> => {
    const response = await connection("User")
        .where({ email: email })
    return response[0]
}