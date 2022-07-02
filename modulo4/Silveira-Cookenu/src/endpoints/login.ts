import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res
                .status(422)
                .send("Correctly enter the 'email' and 'password' information")
        }

        const userDatabase = new UserDataBase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409).send('This email is not registered')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (req.body.email !== user.getEmail()) {
            res.status(401).send('Incorrect email or password')
        }

        if (!passwordIsCorrect) {
            res.status(401).send('Incorrect email or password')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({
            id: user.getId(),
            role: user.getRole()
        })

        res.status(200).send({ message: 'User logged in successfully', token })
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}