import { USER_ROLES } from "../model/User";
import { generateId } from "../services/idGenerator";
import { UserDatabase } from '../data/UserDatabase';
import { compare, hash } from "../services/hashManager";
import { generateToken, getTokenData } from "../services/authenticator";

export class userBusiness {
    async createUser(name: string, email: string, password: string, role: USER_ROLES) {
        try {
            if (!name || !email || !password || !role) {
                throw new Error('Please fill all the fields')
            }
            if (email.indexOf('@') === -1) {
                throw new Error('Invalid Email')
            }
            if (password.length < 6) {
                throw new Error('Password must have at least 6 characters')
            }

            const id = generateId()

            const hashPasword = await hash(password)

            await new UserDatabase().createUser(id, email, name, hashPasword, role)

            const token = generateToken({ id, role })

            return token
        } catch (error: any) {
            throw new Error(error.message || 'Error creating user. Please check your system administrator.')
        }
    }

    async loginUser(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new Error("Correctly enter the 'email' and 'password' information")
            }

            const user = await new UserDatabase().loginUser(email)

            const hashCompare = await compare(password, user.password)

            const token = generateToken({ id: user.id, role: user.role })

            if (!hashCompare) {
                throw new Error("Correctly enter the 'email' and 'password' information")
            }

            return token
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    async get(token: string) {
        getTokenData(token)
        return await new UserDatabase().get()
    }

    async deleteUser(input: { id: string, token: string }) {
        const verifiedToken = getTokenData(input.token)

        if (verifiedToken.role !== "ADMIN") {
            throw new Error('Only admins can delete users')
        }

        return await new UserDatabase().deleteUser(input.id)
    }
}