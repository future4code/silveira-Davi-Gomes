import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { User } from '../entities/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/idGenerator'

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            res
                .status(422)
                .send("Correctly enter the 'name', 'email', 'password' and 'role' information")
        }

        if (email.indexOf('@') === -1) {
            res
                .status(422)
                .send('Please, check your email address')
        }

        if (password.length < 6) {
            res
                .status(422)
                .send('Invalid password. At least six characters are required')
        }

        const userDatabase = new UserDataBase()
        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409).send('This email is already registered')
        }
        const idGenarator = new IdGenerator()
        const id = idGenarator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id, role })

        res.status(200).send({ message: 'User created successfully', token })
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}