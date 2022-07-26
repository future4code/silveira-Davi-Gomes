import { BASE_URL_IMAGE } from "../../../constants/constants"
import { StyledRecomendations } from "./styled";




export const CastCarousel = ({ cast }) => {
    return (
        <StyledRecomendations>
            { cast && cast.filter((actor) => {
                return actor.profile_path !== null;
            }).map((actor) => {
                return (                    
                    <div key={actor.name}>
                        <div>
                            <img
                            src={`${BASE_URL_IMAGE}${actor.profile_path}`} alt={`Foto de ${actor.name}`} />
                        </div>

                            <p>{actor.name}</p>

                            <p>{actor.character}</p>
                    </div>
                )
            }) }
        </StyledRecomendations>
    )
}