import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'

export async function profile(req: Request, res: Response) {
    try {
        const token = new Authenticator().getTokenData(req.headers.authorization as string)

        if (!token) {
            res
                .status(422)
                .send('This endpoint requires authorization to be passed in headers')
        }

        const users = await new UserDataBase().getProfile(token.id)

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
} 