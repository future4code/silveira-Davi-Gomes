import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL_IMAGE } from "../constants/constants"
import { DetailsPage } from "../router/coordinator";




export function MovieCardComponents({
    id,
    poster,
    title,
    release_date,
}) {
    const convertDate = (releaseDate) => {
        let [year, month, day] = releaseDate.split("-");
        switch (month) {
            case "01":
                month = "JAN";
                break;
            case "02":
                month = "FEV";
                break;
            case "03":
                month = "MAR";
                break;
            case "04":
                month = "ABR";
                break;
            case "05":
                month = "MAI";
                break;
            case "06":
                month = "JUN";
                break;
            case "07":
                month = "JUL";
                break;
            case "08":
                month = "AGO";
                break;
            case "09":
                month = "SET";
                break;
            case "10":
                month = "OUT";
                break;
            case "11":
                month = "NOV";
                break;
            case "12":
                month = "DEZ";
                break;
        };

        return `${day} ${month} ${year}`;
    }

    const navigate = useNavigate()

    return (
        <div >
            <img
                src={`${BASE_URL_IMAGE}${poster}`}
                alt={`${title} poster`}
                onClick={() => DetailsPage(navigate, id)}
            />

            <p>{title}</p>

            <p>{convertDate(release_date)}</p>
        </div>
    );
};











