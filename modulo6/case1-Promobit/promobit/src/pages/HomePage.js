import { Header } from "../components/Header"
import { useRequestData } from "../Hooks/useRequestData"
import {MovieCardComponents} from "../components/MovieCard.tsx"
import { useNavigate } from "react-router-dom"
import {MovieGenreButtonComponents} from "../components/MovieGenreButton.tsx"

export function HomePage() {
    const genres = useRequestData([], "/genre/movie/list")
    const movies = useRequestData([], "/movie/popular")

    const navigate = useNavigate()

    const genresList = genres.data.data && genres.data.data.genres.map((genre) => {
        return (
            <MovieGenreButtonComponents key={genre.id} genre={genre.name} />
        )
    })

    const moviesList = movies.data.data && movies.data.data.results.map((movie) => {
        return (
            <MovieCardComponents key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                navigate={navigate}
            />
        );
    });

    return (
        <div className="container">
            <Header/>
            <div className="">
                <h1 className="">
                    Milhões de filmes, séries e pesssoas <br /> para descobrir. Explore já.
                </h1>

                <p className="">Filtre por:</p>

                <div className="genresList">
                    {genresList}
                </div>

                
                    <div className="moviesList">
                        {moviesList}
                    
                </div>
            </div>
        </div>
    )
}