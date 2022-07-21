import { useParams } from "react-router-dom"
import { useRequestData } from "../Hooks/useRequestData"
import {useNavigate} from "react-router-dom"



export function DetailsPage() {
    const { id } = useParams()
    const { data } = useRequestData({}, `/movie/${id}`)
    
    const navigate = useNavigate()

    return (
        <div>
            <h1>Movie details page</h1>
            
        </div>
    )
}