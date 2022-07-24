// import { useContext, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { getMovieCredits, getMovieDetailts, getMovieList, getMovieVideos } from "../../Api/Axios_get"
// import { CompDetails } from "../../components/Details/index"
// import GlobalStateContext from "../../Global/GlobalStateContext"
// import { changePage } from "../../router/routerGPS"
// import { MovieCardComponents } from "../../components/MovieCard.tsx"
// import { idMaker } from "../../Utilities/idMeker"
// // import { StyledDetailsCard, StyledPageDetails, StyledRecomendations, StyledRecomendationsCard, StyledTrailer } from "./style"


// export const DetailsPage = () => {
//     const { set_movieDetails, movieCredits, set_movieCredits, movieVideos, set_movieVideos, movieRecomendedList, set_movieRecomendedList} = useContext(GlobalStateContext)

//     const Navigate = useNavigate()

//     useEffect(() => {
//         const id = Navigate.location.pathname.split("/")[2]
//         getMovieCredits(set_movieCredits, id)
//         getMovieVideos(set_movieVideos, id)
//         getMovieList(set_movieRecomendedList, id)
//         window.scrollTo(0, 0)
//     }, [])

//     const renderedCast = movieCredits.cast && movieCredits.cast.map((cast) => {
//         return(
//             <div key={idMaker()}>
//                 <img 
//                 src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} 
//                 alt={`Imagem de ${cast.name}`} />
//                 <div className="card-text">
//                     <p>{cast.name}</p>
//                     <p>{cast.character}</p>
//                 </div>

//             </div>
//         )
//     })

//     const renderedTrailer = movieVideos && movieVideos.map((trailer) => {
//         return(
//             <div key={idMaker()}>
//                 <iframe 

//                 width="560" 
//                 height="315" 
//                 src={`https://www.youtube.com/embed/${trailer.key}`} 
//                 title={`${trailer.name}`}>

//                 </iframe>
//             </div>
//         )
//     })

//     const goToMovieDetails = (id) => {
//         getMovieDetailts(set_movieDetails, id)
//         getMovieCredits(set_movieCredits, id)
//         getMovieVideos(set_movieVideos, id)
//         getMovieList(set_movieRecomendedList, id)
//         window.scrollTo(0, 0)
//         changePage(Navigate, "/details", id)
//     }

//     const renderedRecomendations = movieRecomendedList && movieRecomendedList.map((list) => {
//         return(
//             <div


//             key={idMaker()} 
//             onClick={() => goToMovieDetails(list.id)}>

//                 <img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={`Imagem de ${list.title}`} />

//                 <div className="card-text">
//                     <p>{list.title}</p>
//                     <p>{MovieCardComponents(list.release_date)}</p>
//                 </div>

//             </div>
//         )
//     })

//     return(
//         <div>
//             <CompDetails />
//             <div>
//                 {renderedCast}
//             </div>

//             <h2 style={{marginLeft: '2rem', marginBottom: '1rem'}}> Trailer </h2>
//             {renderedTrailer}

//             <h2 style={{marginLeft: '2rem', marginBottom: '1rem'}}> Recomendações </h2>

//             <div>
//                 {renderedRecomendations}
//             </div>

//         </div>
//     )
// } 







































import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { useNavigate } from "react-router-dom"



export function DetailsPage() {
    const { id } = useParams()
    const { data } = useRequestData({}, `/movie/${id}`)
    console.log(data)
    // const { set_movieDetails, movieCredits, set_movieCredits, movieVideos, set_movieVideos, movieRecomendedList, set_movieRecomendedList} = useContext(GlobalStateContext)
    const navigate = useNavigate()

    return (
        <div>
            <h1>Movie details page</h1>

        </div>
    )
}