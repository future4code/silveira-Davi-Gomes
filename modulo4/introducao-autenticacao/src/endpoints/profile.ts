import { Request, Response } from 'express';
import { getUserById } from './getUserByld';
import { getData } from '../services/Authenticator';

export const profile = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;

    try {
        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
        })
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}