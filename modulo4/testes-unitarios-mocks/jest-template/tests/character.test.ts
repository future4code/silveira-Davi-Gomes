import { validateCharacter } from '../src/character';

describe('test validateCharacter', () => {
    test('test character with empty name', () => {
        const result = validateCharacter({
            name: '',
            life: 1500,
            defense: 500,
            strength: 250
        })
        expect(result).toBe(false)
    })
    test('test character with life equal to zero', () => {
        const result = validateCharacter({
            name: 'Subzero',
            life: 0,
            defense: 500,
            strength: 250
        })
        expect(result).toBe(false)
    })
    test('test character with strength equal to zero', () => {
        const result = validateCharacter({
            name: 'Subzero',
            life: 1500,
            defense: 500,
            strength: 0
        })
        expect(result).toBe(false)
    })
    test('test character with defense equal to zero', () => {
        const result = validateCharacter({
            name: 'Subzero',
            life: 1500,
            defense: 0,
            strength: 250
        })
        expect(result).toBe(false)
    })
    test('test character with health or strength or defense with a negative value', () => {
        const result = validateCharacter({
            name: 'Subzero',
            life: -1500,
            defense: 500,
            strength: 250
        })
        expect(result).toBe(false)
    })
    test('test character with valid information', () => {
        const result = validateCharacter({
            name: 'Subzero',
            life: 1500,
            defense: 500,
            strength: 250
        })
        expect(result).toBe(true)
    })
})
