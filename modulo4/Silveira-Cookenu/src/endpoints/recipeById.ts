import { Request, Response } from 'express'
import { RecipeDatabase } from '../data/RecipeDatabase'
import { Authenticator } from '../services/Authenticator'

export async function recipeById(req: Request, res: Response) {
    try {
        const token = new Authenticator().getTokenData(req.headers.authorization as string)
        const id = req.params.id

        if (!token) {
            res
                .status(422)
                .send('This endpoint requires authorization to be passed in headers')
        }

        if (!id) {
            res
                .status(422)
                .send('Invalid id')
        }

        const recipe = await new RecipeDatabase().getRecipe(id)
        const dateRecipe = recipe.created_at
        const createdAt = new Date(dateRecipe).toISOString().slice(0, 10).split('-').reverse().join('/')
        recipe.created_at = createdAt

        res.status(200).send(recipe)
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
} 