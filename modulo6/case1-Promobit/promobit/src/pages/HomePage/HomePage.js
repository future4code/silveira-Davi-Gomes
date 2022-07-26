import { Header } from "../../components/Header.tsx"
import { useRequestData } from "../../Hooks/useRequestData"
import { MovieCardComponents } from "../../components/MovieCard.tsx"
import { useNavigate } from "react-router-dom"
import { MovieGenreButtonComponents } from "../../components/MovieGenreButton.tsx"
import { CardContainer, StyledCardHome, TextContainer, ContainerFiltro, BotoesFiltro } from "./Styled"
// import { CompFooter } from "../../components/Footer/Footer"


export function HomePage() {
    const genres = useRequestData([], "/genre/movie/list")
    const movies = useRequestData([], "/movie/popular")

    const Navigate = useNavigate()

    const genresList = genres.data.data && genres.data.data.genres.map((genre) => {
        return (
            <MovieGenreButtonComponents key={genre.id} genre={genre.name} />
        )
    })

    const moviesList = movies.data.data && movies.data.data.results.map((movie) => {
        return (
            <CardContainer>
                <MovieCardComponents key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                    Navigate={Navigate}
                />
            </CardContainer>
        )
    })

    return (
        <StyledCardHome>
            <Header />
            <ContainerFiltro>
                <TextContainer>
                    <h1>
                        Milhões de filmes, séries e pesssoas <br /> para descobrir. Explore já.
                    </h1>
                </TextContainer>
                <p >Filtre por:</p>
                <BotoesFiltro>
                    {genresList}
                </BotoesFiltro>
            </ContainerFiltro>
            <div class="movie-list">
                {moviesList}
            </div>
        </StyledCardHome>
    )
}


