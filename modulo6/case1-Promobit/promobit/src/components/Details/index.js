import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getMovieCredits, getMovieDetailts } from "../../Api/Axios_get"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { minutesToHours } from "../../Utilities/convertMinutesHours"
import { idMaker } from "../../Utilities/idMeker"



export const CompDetails = () => {
    const { movieDetails, set_movieDetails, movieCredits, set_movieCredits } = useContext(GlobalStateContext)
    const Navigate = useNavigate()

    useEffect(() => {
        const id = Navigate.location.pathname.split("/")[2]
        getMovieDetailts(set_movieDetails, id)
        getMovieCredits(set_movieCredits, id)
    }, [])


    const renderedScreen = movieDetails &&
        <div className="menu">
            <div className="menu-photo">
                {movieDetails.poster_path && <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} />}
            </div>

            <div className="menu-text">

                <div className="section-1">
                    <h2>{movieDetails.title && movieDetails.title}</h2>
                    <h2>({movieDetails.release_date && movieDetails.release_date.split("-").splice(0, 1)})</h2>
                </div>

                <div className="section-2">
                    <div className="section-2_child1">
                        <p>{movieDetails.release_date} (BR) </p>
                    </div>

                    <div className="section-2_child2">
                        {movieDetails.genres && movieDetails.genres.map((genre) => {
                            return <p key={idMaker()}> {genre.name}</p>
                        })}
                    </div>

                    <div className="section-2_child3">
                        <p>{minutesToHours(movieDetails.runtime)}</p>
                    </div>
                </div>

                <div className="section-3">

                    <p className="section-3_child1"> popularidade: </p>
                    <p className="section-3_child2"><ion-icon name="pulse-outline" />{movieDetails.popularity}</p>
                </div>

                <div className="section-4">
                    <div>
                        <h3>Sinopse</h3>
                    </div>
                    <div>
                        <p>{movieDetails.overview && movieDetails.overview}</p>
                    </div>
                </div>

                <div className="section-5">
                    {movieCredits.crew && movieCredits.crew.slice(0, 5).map((crew) => {
                        return (
                            <div key={idMaker()}>
                                <p>{crew.name}</p>
                                <p>{crew.job}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

    return (
        <div>
            {renderedScreen}
        </div>
    )
}