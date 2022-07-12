import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   public async createUser(
      id: string,
      email: string,
      name: string,
      password: string,
      role: string
   ): Promise<void> {
      try {
         await BaseDatabase.connection('User_Arq')
            .insert({
               id,
               email,
               name,
               password,
               role
            })
      } catch (error: any) {
         throw new Error(error.message || error.sqlMessage)
      }
   }

   public async loginUser(email: string): Promise<any> {
      try {
         const result = await BaseDatabase.connection('User_Arq')
            .select('*')
            .where({ email })

         if (!result[0]) {
            throw new Error('User not found')
         }

         return result[0]
      } catch (error: any) {
         throw new Error(error.message || error.sqlMessage)
      }
   }

   public async get(): Promise<any[]> {
      try {
         const result = await BaseDatabase.connection('User_Arq')
            .select('*')

         return result
      } catch (error: any) {
         throw new Error(error.message || error.sqlMessage)

      }
   }

   public async deleteUser(id: string): Promise<void> {
      try {
         await BaseDatabase.connection('User_Arq')
            .where({ id })
            .del()

      } catch (error: any) {
         throw new Error(error.message || error.sqlMessage);
      }
   }
}