import { purchase } from '../data/index';
import { User } from '../types/user';

describe('test index.test.ts', () => {
    test('balance test greater than the purchase amount', () => {
        const user: User = {
            name: 'Davi',
            balance: 100
        }
        const result = purchase(user, 50)
        expect(result).toEqual({ name: 'Davi', balance: 50 })
    })
    test('balance test equal to the purchase amount', () => {
        const user: User = {
            name: 'Robervaldo',
            balance: 100
        }
        const result = purchase(user, 100)
        expect(result).toEqual({ name: 'Robervaldo', balance: 0 })
    })
    test('balance test less than the purchase amount', () => {
        const user: User = {
            name: 'Roger',
            balance: 50
        }
        const result = purchase(user, 100)
        expect(result).not.toBeDefined()
    })
})