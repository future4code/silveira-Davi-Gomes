// import ratingStarIcon from "../../assets/ratingStarIcon.png";

import { useRequestData } from "../../../Hooks/useRequestData";





export const Infos = ({
    id,
    title,
    genres,
    runtime,
    vote_average,
    overview
}) => {
    const { data } = useRequestData({}, `/movie/${id}/release_dates`)
    const infosList = data.data && data.data.results

    const filteredInfoByCountry = infosList && infosList.filter((info) => {
        return info.iso_3166_1 === "BR" || info.iso_3166_1 === "US"
    })[0]

    const certification = filteredInfoByCountry && {
        country: filteredInfoByCountry.iso_3166_1,
        release_year: filteredInfoByCountry.release_dates[0].release_date.split("-").at(0),
        classification: filteredInfoByCountry.release_dates[0].certification,
        release_date: filteredInfoByCountry.release_dates[0].release_date.substring(0, 10).split("-").reverse().join("/"),
    }

    const genresListToString = genres.map((genre) => genre.name).join(", ")

    const minToHours = (min) => {
        const hours = min / 60
        const intHours = Math.floor(hours)

        const minutes = (hours - intHours) * 60
        const intMinutes = Math.round(minutes)

        return `${intHours}hr ${intMinutes}m`
    };

    const onlyNumbers = (str) => /\d/.test(str)

    return (
        <>
            { certification &&
            <div> 
                <h2 >{ title } ({ certification.release_year })</h2>

                <p >
                    { certification.country === "BR" && onlyNumbers(certification.classification) ? `${certification.classification} anos` : "Classificação indisponível" } • { certification.release_date } ({certification.country}) • { genresListToString !== "" ? genresListToString : "Desconhecido" } • { minToHours(runtime) }
                </p>

                <div >
                    {/* <img className="w-6" src={ ratingStarIcon } alt="Star" /> */}

                    <div>
                        <span >{ vote_average.substring(0, 3) }</span>
                        <span>/10</span>
                    </div>
                </div>

                <p >Sinopse</p>
                <p className={`mt-2 mb-8 ${!overview && `italic`}`}>{ overview ? overview : "Sinópse indisponível." }</p>
            </div>
        }</>
    )
}