import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'

export async function profilebyId(req: Request, res: Response) {
    try {
        const token = new Authenticator().getTokenData(req.headers.authorization as string)
        const id = req.params.id

        if (!token) {
            res
                .status(422)
                .send('This endpoint requires authorization to be passed in headers')
        }

        if (!id) {
            res
                .status(422)
                .send('Invalid id')
        }

        const users = await new UserDataBase().getProfile(id)

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
} 