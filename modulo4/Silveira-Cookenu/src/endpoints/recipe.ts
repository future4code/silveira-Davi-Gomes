import { Request, Response } from 'express';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { Recipe } from '../entities/Recipe';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/idGenerator';

export async function recipe(req: Request, res: Response) {
    try {
        const token = new Authenticator().getTokenData(req.headers.authorization as string)
        const { title, description } = req.body
        const createdAt = new Date().toISOString().slice(0, 10)

        if (!token) {
            res
                .status(422)
                .send('This endpoint requires authorization to be passed in headers')
        }

        if (!title || !description) {
            res
                .status(422)
                .send("Correctly enter the 'title' and 'description' information")
        }

        const recipeDatabase = new RecipeDatabase()

        const idGenarator = new IdGenerator()
        const id = idGenarator.generate()

        const newRecipe = new Recipe(id, title, description, createdAt)
        await recipeDatabase.createRecipe(newRecipe)

        res.status(200).send('Recipe created successfully')
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}