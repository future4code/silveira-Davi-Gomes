import React from "react";
import { BASE_URL_IMAGE } from "../constants/constants";
import { DetailsPage } from "../router/coordinator.tsx";

interface MovieCardProps {
    id: number,
    poster: string,
    title: string,
    release_date: string,
    navigate: any
};

export function MovieCardComponents({
    id,
    poster,
    title,
    release_date,
    navigate
}: MovieCardProps) {
    const convertDate = (releaseDate: string): string => {
        let [year, month, day] = releaseDate.split("-");

        switch(month) {
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
    };


    return (
        <div className="flex flex-col w-64">
            <img className="border-transparent rounded h-96 hover:border cursor-pointer"
            src={`${BASE_URL_IMAGE}${poster}`} 
            alt={`${title} poster`}
            onClick={ () => DetailsPage(navigate, id) }
            />

            <p className="text-black font-bold my-1">{title}</p>

            <p className="text-sm text-light_grey font-bold">{convertDate(release_date)}</p>
        </div>
    );
};











// MovieCardComponents