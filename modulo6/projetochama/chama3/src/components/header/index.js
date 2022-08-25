import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi/index"
import { HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection, HeaderTitle } from "./styles"
import client from "../../services/client"

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('')
async function getUserData() {
    try {
        const response = await client.get(`/${searchedValue}`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}
    return (
        <HeaderSection>
            <HeaderTitle></HeaderTitle>
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