import * as jwt from 'jsonwebtoken';
import { POST_TYPES } from '../model/post';

export type AuthenticationData = {
    id: string,
}

export type AuthenticationPost = {
    type: POST_TYPES,
}

export function generateToken(payload: AuthenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string,
        {
            expiresIn: '24min'
        }
    )
}
export function getTokenData(token: string): AuthenticationData {
    return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
}