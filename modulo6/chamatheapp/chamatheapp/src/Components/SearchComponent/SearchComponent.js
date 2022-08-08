import React, { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { SearchForm, SearchInput, SubmitInput } from "./style"


const SearchComponent = () => {
    const { userName, onSubmitForm, onChangeUserName } = useContext(GlobalContext)

    return (
        <SearchForm>
            <SearchInput type="search" value={userName} onChange={onChangeUserName} placeholder="Search for a GitHub user..." />
            <SubmitInput type="submit" value="Search" onClick={onSubmitForm} />
        </SearchForm>
    )

}

export default SearchComponent