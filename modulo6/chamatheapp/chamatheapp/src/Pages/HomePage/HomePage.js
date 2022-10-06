import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, SearchHistoryButton } from '../../Components/Header/Header'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import UserCard from '../../Components/UserCard/UserCard'
import UserRepositories from '../../Components/UserRepositories/UserRepositories'
import Github from '../../Assets/github.png'
import { Main, PageWrapper } from './style'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <PageWrapper>
            <Header>
                <img src={Github} alt="github logo" ></img>
                <SearchComponent />
                <SearchHistoryButton onClick={() => navigate("/search/history")}>History</SearchHistoryButton>
            </Header>
            <Main>
                <UserCard />
                <UserRepositories />
            </Main>
        </PageWrapper>
    )
}
export default HomePage