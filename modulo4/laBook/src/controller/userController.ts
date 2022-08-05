import { Request, Response } from 'express';
import { userBusiness } from '../business/userBusiness';

export class userController {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const token = await new userBusiness().createUser(name, email, password)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const token = await new userBusiness().loginUser(email, password)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
} 