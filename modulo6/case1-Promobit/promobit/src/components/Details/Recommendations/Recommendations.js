import { useNavigate } from "react-router-dom"
import { BASE_URL_IMAGE } from "../../../constants/constants";

import { useRequestData } from "../../../Hooks/useRequestData"


// import { MovieCardComponents } from "../../MovieCard"
import { StyledRecomendations2 } from "./styled";



export const Recommendations = ({ id }) => {
    const recommendations = useRequestData({}, `/movie/${id}/recommendations`);
    const navigate = useNavigate();

    const recommendationsList = recommendations.data.data && recommendations.data.data.results

    return (
        <div>
            {recommendationsList &&
                <StyledRecomendations2>
                    {recommendationsList.filter((movie) => {
                        return movie.poster_path !== null
                    }).map((movie) => {
                        return (
                            <div>
                                <div key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    release_date={movie.release_date}
                                    navigate={navigate}
                                />
                                <img src={`${BASE_URL_IMAGE}${movie.poster_path}`} />
                            </div>
                        )
                    }).slice()}

                </StyledRecomendations2>
            }</div>
    )
}