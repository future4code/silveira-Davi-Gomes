import { useEffect, useState } from "react"
import { getPopularMovies } from "../Api/Axios_get"
import GlobalStateContext from "./GlobalStateContext"


export const GlobalState = (props) => {
    const [moviesList, set_moviesList] = useState([])
    const [movieDetails, set_movieDetails] = useState([])
    const [movieCredits, set_movieCredits] = useState([])
    const [actualPage, set_actualPage] = useState(1)
    const [movieVideos, set_movieVideos] = useState([])
    const [movieRecomendedList, set_movieRecomendedList] = useState([])


    useEffect(() => {
        getPopularMovies(set_moviesList)
    }, [])




    return(
        <GlobalStateContext.Provider value={{
            moviesList, set_moviesList, 
            movieDetails, set_movieDetails, 
            movieCredits, set_movieCredits, 
            actualPage, set_actualPage,
            movieVideos, set_movieVideos,
            movieRecomendedList, set_movieRecomendedList
        }}>
            {props.children}
        </GlobalStateContext.Provider>

    )
}