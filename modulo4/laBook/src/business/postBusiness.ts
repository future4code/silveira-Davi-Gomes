import { postDatabase } from '../data/postDatabase';
import { Post } from '../model/post';
import { postDTO } from '../model/types';
import { generateToken, getTokenData } from '../services/authenticador';
import { generateId } from '../services/idGenerator';

export class postBusiness {
    async createPost(post: postDTO) {
        try {
            if (!post.photo || !post.description || !post.type) {
                throw new Error('Please fill all the fields')
            }

            const user_id = getTokenData(post.token)
            const id = generateId()
            const creationDate = new Date().toISOString().slice(0, 10)
            const newPost = new Post(id, post.photo, post.description, creationDate, post.type, user_id.id)
            await new postDatabase().createPost(newPost)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    async postById(id: string) {
        try {
            if (!id) {
                throw new Error('Invalid parameter')
            }

            const post = await new postDatabase().postById(id)
            const reverseDate = new Date(post.creation_date).toISOString().slice(0, 10).split("-").reverse().join("/")
            post.creation_date = reverseDate

            return post

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}