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
import { DescricaoContainer, Div, MainContainer } from "./styled";








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
            <Header />
            {details && production &&
                <div>
                    <MainContainer>

                        <img src={`${BASE_URL_IMAGE}${details.poster_path}`}
                            alt={`${details.title} poster`} />
                    </MainContainer>
                    <DescricaoContainer>
                        <h3>
                            <div className="Sinopse">

                                <Infos
                                    id={id}
                                    title={details.title}
                                    genres={details.genres}
                                    runtime={details.runtime}
                                    vote_average={details.vote_average.toString()}
                                    overview={details.overview}
                                />
                            </div>
                        </h3>


                        <h3 className="elenco">
                            Elenco original
                        </h3>
                        <h3 className="Producao">
                            <ProductionCrew crew={crew} />

                        </h3>
                    </DescricaoContainer>

                    <CastCarousel cast={cast} />


                    <Div>

                        <h2>
                            Trailer
                        </h2>
                        <Trailer id={id} />
                        <h2>
                            Recomendações
                        </h2>
                    </Div>
                    <Recommendations id={id} />


                </div>}

        </div>
    )
}