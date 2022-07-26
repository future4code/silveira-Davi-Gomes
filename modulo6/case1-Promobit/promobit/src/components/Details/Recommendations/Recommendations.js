import { useNavigate } from "react-router-dom"

import { useRequestData } from "../../../Hooks/useRequestData"


import { MovieCardComponents } from "../../MovieCard"
import { StyledRecomendations } from "./styled";



export const Recommendations = ({ id }) => {
    const recommendations = useRequestData({}, `/movie/${id}/recommendations`);
    const navigate = useNavigate();

    const recommendationsList = recommendations.data.data && recommendations.data.data.results

    return (
        <StyledRecomendations>
            {recommendationsList &&
            <div>
                {recommendationsList.filter((movie) => {
                    return movie.poster_path !== null
                }).map((movie) => {
                    return (
                        <MovieCardComponents key={movie.id}
                            id={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            navigate={navigate}
                        />
                    )
                }).slice(0, 5)}

            </div>
        }</StyledRecomendations>
    )
}