import { Genre } from "./genre";

export interface Movie {
    id: number,
    poster_path: string,
    title: string,
    release_date: string,
}

export interface MovieDTO extends Movie {
    genre_ids: Genre[]
}

export interface MovieDetails {
    id: number,
    poster_path: string,
    title: string,
    genres: Genre[],
    runtime: number,
    vote_average: string,
    overview: string
}

export interface Video {
    key: string
}

export interface VideoDTO {
    type: string,
    official: boolean
}

export interface GeneralInfo {
    release_dates: InfoByCountry[],
    iso_3166_1: string
}

export interface InfoByCountry {
    certification: string,
    release_date: string
}