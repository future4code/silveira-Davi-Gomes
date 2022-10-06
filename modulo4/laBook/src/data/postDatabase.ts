import { Post } from '../model/post';
import { postByDatabase } from '../model/types';
import { baseDatabase } from './baseDatabase';

export class postDatabase extends baseDatabase {
    public async createPost(post: Post): Promise<void> {
        try {
            await baseDatabase.connection('labook_post')
                .insert(post)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    public async postById(id: string): Promise<postByDatabase> {
        try {
            const result = await baseDatabase.connection('labook_post')
                .select('*')
                .where({ id })

            if (!result) {
                throw new Error('Post not found')
            }

            const post = {
                id: result[0].id,
                photo: result[0].photo,
                description: result[0].description,
                creation_date: result[0].creation_date,
                type: result[0].type,
                user_id: result[0].user_id
            }
            return post
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
} 