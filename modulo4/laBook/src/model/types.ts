import { POST_TYPES } from "./post"

export type postDTO = {
    token: string,
    photo: string,
    description: string,
    type: POST_TYPES
}

export type postByDatabase = {
    id: string,
    photo: string,
    description: string,
    creation_date: string,
    type: POST_TYPES,
    user_id: string
}