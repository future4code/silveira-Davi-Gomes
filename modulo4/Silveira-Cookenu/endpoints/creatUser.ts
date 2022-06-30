import { Request, Response } from "express"
import { connection } from "../data/connection"
import { generateId } from "../services/generateId"
import { AuthenticationData } from "../services/types"
import Authenticator from "../services/Authenticator"

export default async function createUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("invalid email")
        }
        // tamanho da senha
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("invalid password")
        }
        res.status(200).send("jwt generated token")
        const id = generateId()
        const userId = {
            id,
            email,
            password
        }
        await connection("User")
            .insert(userId)
        const payload: AuthenticationData = {
            id: userId.id
        }
        const token = new Authenticator().generateToken(payload)
        res.status(200).send({ token })
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
