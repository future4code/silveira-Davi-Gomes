import app from '../app';
import { User } from '../types/user';

export const purchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}