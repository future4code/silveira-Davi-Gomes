export type AuthenticationData = {
    id: string
}

export interface participationDTO {
    firstName: string,
    lastName: string,
    participation: number
}

export interface updateDTO {
    id: string,
    firstName: string,
    lastName: string
    participation: number
}

export interface deleteDTO {
    firstName: string,
    lastName: string
}