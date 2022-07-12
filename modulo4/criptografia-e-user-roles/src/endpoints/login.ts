import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { connection } from "../connection";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateId, generateToken } from "../data/uuid";

export const login = async(req: Request, res: Response): Promise<any> => {
    let erroCode = 404
    try{
        const {email, password} = req.body
        const user = await getUserByEmail(email)

        if(user.password !== password) {
            erroCode = 404
            throw new Error("Incorrect password")
        }
        const token = generateToken({
            id: user.id,
            role: user.role
        })
        res.send({token})
    } catch(error: any){
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}