import { Request, Response } from 'express';
import { postBusiness } from '../business/postBusiness';
import { postDTO } from '../model/types';

export class postController {
    async create(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { photo, description, type } = req.body
            const post: postDTO = { token, photo, description, type }
            await new postBusiness().createPost(post)

            res.status(200).send('Post created successfully')
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
    async postById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const post = await new postBusiness().postById(id)

            res.status(200).send({ post })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}