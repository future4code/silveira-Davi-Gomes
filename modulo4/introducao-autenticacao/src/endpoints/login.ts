import { Request, Response } from 'express';
import { getUserByEmail } from '../endpoints/getUserByEmail';
import Authenticator from '../services/Authenticator';

export default async function login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error('Invalid email')
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error('Invalid password')
        }

        const userId = {
            email,
            password,
        }

        res.status(200).send('jwt generated token')

        const user = await getUserByEmail(userId.email)

        const token = new Authenticator().generateToken({
            id: user.id,
        });

        res.status(200).send({ token })

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}