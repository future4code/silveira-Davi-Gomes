import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import UserCard from '../../Components/UserCard/UserCard'
import UserRepositories from '../../Components/UserRepositories/UserRepositories'


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            {/* Header */}
            <div>
eu sou o header
<SearchComponent/>
<button onClick={()=>navigate("/search/history")}>History</button>
            </div>
            {/* Main */}
            <div>
eu sou a main
<UserCard/>
<UserRepositories/>
            </div>
        </div>
    )
}
export default HomePage