import { userDatabase } from '../data/userDatabase';
import { generateToken } from '../services/authenticador';
import { generateId } from '../services/idGenerator';
import { compare, hash } from '../services/hashManager'

export class userBusiness {
    async createUser(name: string, email: string, password: string) {
        try {
            if (!name || !email || !password) {
                throw new Error('Please fill all the fields')
            }
            if (email.indexOf('@') === -1) {
                throw new Error('Invalid email')
            }
            if (password.length < 6) {
                throw new Error('Password must have at least 6 characters')
            }
            
            const id = generateId()
            const hashPassword = await hash(password)
            await new userDatabase().createUser(id, name, email, hashPassword)
            const token = generateToken({ id })
            
        
            return token
            
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    async loginUser(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new Error("Correctly enter the 'email' and 'password' information")
            }
            const user = await new userDatabase().loginUser(email)
            const hashCompare = await compare(password, user.password)

            if (!hashCompare) {
                throw new Error("Correctly enter the 'email' and 'password' information")
            }

            const token = generateToken({ id: user.id })

            return token
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
} 