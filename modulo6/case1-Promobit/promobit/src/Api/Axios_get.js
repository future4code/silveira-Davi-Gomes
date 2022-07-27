import axios from "axios"
import { BASE_URL } from "../constants/constants"
import { API_KEY } from "../constants/constants"

export const getPopularMovies = (set_data, page) => {
    const url = `${BASE_URL}popular?${API_KEY}&language=pt-BR&page=${page}`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data.results)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}

export const getMovieDetailts = (set_data, id) => {
    const url = `${BASE_URL}${id}?${API_KEY}&language=pt-BR&page=1`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}

export const getMovieCredits = (set_data, id) => {
    const url = `${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}

export const getMovieVideos = (set_data, id) => {
    const url = `${BASE_URL}${id}/videos?${API_KEY}&language=pt-BR`

    axios.get(url)
        .then((resp) => {
            const trailer = resp.data.results.filter((video) => {
                if (video.type === "Trailer") {
                    return video
                }
            })
            set_data(trailer)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}

export const getMovieList = (set_data, id) => {
    const url = `${BASE_URL}${id}/recommendations?${API_KEY}&language=pt-BR`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data.results)
        })
        .catch((error) => {
            window.alert(error.message)
        })
} 