import React, { useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../Components/Header/Header"
import GlobalContext from "../../Global/GlobalContext"
import Github from "../../Assets/github.png"
import { PageWrapper } from "../HomePage/style"

const SearchHistoryPage = () => {

    const { history, setHistory } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {

    })

    return (
        <PageWrapper>
            <Header>
                <img src={Github} onClick={()=>navigate("/")}></img>
            </Header>
        </PageWrapper>
    )
}

export default SearchHistoryPage