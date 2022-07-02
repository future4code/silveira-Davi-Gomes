import { Recipe } from "../entities/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection("recipe").insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                created_at: recipe.getCreatedAt(),
            })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    public async getRecipe(id: string) {
        try {
            const recipe = await BaseDatabase.connection("recipe")
                .select("*")
                .where({ id })
            return recipe[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}