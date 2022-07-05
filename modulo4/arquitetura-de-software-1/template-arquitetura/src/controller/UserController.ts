import { Request, Response } from 'express';
import { userBusiness } from '../Bussines/UserBussines';

export class userController {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body
            const token = await new userBusiness().createUser(name, email, password, role)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
        // await destroyConnection()
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

    async get(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const user = await new userBusiness().get(token)

            res.status(200).send(user)
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id as string,
                token: req.headers.authorization as string
            }

            await new userBusiness().deleteUser(input)

            res.status(200).send('User successfully deleted')
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}