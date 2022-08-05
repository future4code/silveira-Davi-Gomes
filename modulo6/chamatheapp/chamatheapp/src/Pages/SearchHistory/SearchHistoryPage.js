import React, { useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../Global/GlobalContext"

const SearchHistoryPage = () => {

    // const { history, setHistory } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {

    })

    return (
        // PageWrapper
        <div>
            {/* Header */}
            <div>
                estou aqui
                {/* img logo */}
                <button onClick={()=>navigate("/")}>home</button>
            </div>
        </div>
    )
}

export default SearchHistoryPage