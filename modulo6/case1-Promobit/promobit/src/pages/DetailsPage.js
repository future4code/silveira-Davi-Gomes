import { useParams } from "react-router-dom"
import { useRequestData } from "../Hooks/useRequestData"

export function DetailsPage() {
    const { id } = useParams()
    const { data } = useRequestData({}, `/movie/${id}`)

    return (
        <div>
            <h1>Movie details page</h1>
        </div>
    )
}