export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number
}

export const validateCharacter = (input: Character): boolean => {
    if (!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined) {
        return false
    }
    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }
    return true
}