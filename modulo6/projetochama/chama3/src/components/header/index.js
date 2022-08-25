import React, { useState, useContext } from 'react'
import { FiSearch } from "react-icons/fi/index"
import { HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection, HeaderTitle } from "./styles"
import client from "../../services/client"
import {context} from "../../context"


const Header = () => {
    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('')
async function getUserData() {
    try {
        const repos = await client.get(`/${searchedValue}/repos`) 
        const response = await client.get(`/${searchedValue}`)
        ctx.setUserData(response.data)
        ctx.setRepos(repos.data)
    } catch (error) {
        console.log(error)
    }
}
    return (
        <HeaderSection >
            <HeaderTitle>Search user name</HeaderTitle>
            
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    )
}

export default Header;