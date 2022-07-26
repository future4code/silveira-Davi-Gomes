import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";

import { BASE_URL_IMAGE } from "../../constants/constants";
import { Header } from "../../components/Header";


import React from "react";
import { Infos } from "../../components/Details/infos/infos";
import { ProductionCrew } from "../../components/Details/ProductionCrew/ProductionCrew";
import { CastCarousel } from "../../components/Details/CastCarousel/CastCarousel";
import { Trailer } from "../../components/Details/Trailer/Trailer";
import { Recommendations } from "../../components/Details/Recommendations/Recommendations";
import { ImagemContainer, StyledDetailsCard, StyledPageDetails, StyledTrailer } from "./styled";








export const MovieDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data } = useRequestData({}, `/movie/${id}`);
    const details = data && data.data;

    const production = useRequestData({}, `/movie/${id}/credits`);
    const crew = production.data.data && production.data.data.crew;
    const cast = production.data.data && production.data.data.cast;

    return (
        <div>

            {details && production &&
                <div>
                    <Header />
                            <ImagemContainer>
                                <img
                                    src={`${BASE_URL_IMAGE}${details.poster_path}`}
                                    alt={`${details.title} poster`} />
                            <div>
                                <Infos
                                    id={id}
                                    title={details.title}
                                    genres={details.genres}
                                    runtime={details.runtime}
                                    vote_average={details.vote_average.toString()}
                                    overview={details.overview}
                                    />
                            </div>
                            <ProductionCrew crew={crew} />
                        <p>
                            Elenco original
                        </p>
                                    </ImagemContainer>
                        <CastCarousel cast={cast} />
                    
                    
                    <div>

                        <p>
                            Trailer
                        </p>
                        <Trailer id={id} />
                        <p>
                            Recomendações
                        </p>
                        <Recommendations id={id} />
                    </div>


                </div>}

        </div>
    )
}