import { connection } from '../data/connection';

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from('User')
        .where({ id });

    return result[0];
}