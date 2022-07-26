import { useRequestData } from "../../../Hooks/useRequestData"



export const Trailer = ({ id }) => {
    const videos = useRequestData({}, `/movie/${id}/videos`);
    const videosList = videos.data.data && videos.data.data.results;

    const trailer_key = videosList && videosList.filter((video) => {
        return video.type === "Trailer" && video.official === true || video.type === "Trailer";
    }).map((video) => {
        return video.key
    })[0]

    return (
        <div>
            {trailer_key ?
            <iframe width="907" height="510" src={`https://www.youtube.com/embed/${trailer_key}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                
            /> :
            <p>Trailer indisponível</p>
        }</div>
    )
}