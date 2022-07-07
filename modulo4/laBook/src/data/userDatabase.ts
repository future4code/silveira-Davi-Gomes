import { baseDatabase } from './baseDatabase';

export class userDatabase extends baseDatabase {
    public async createUser(
        id: string,
        name: string,
        email: string,
        password: string
    ): Promise<void> {
        try {
            await baseDatabase.connection('labook_user')
                .insert({ id, name, email, password })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    public async loginUser(email: string): Promise<any> {
        try {
            const result = await baseDatabase.connection('labook_user')
                .select('*')
                .where({ email })

            if (!result) {
                throw new Error('User not found')
            }

            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
} 