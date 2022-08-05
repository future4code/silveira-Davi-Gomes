import React, { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"


const SearchComponent = () => {
    const { userName, onSubmitForm, onChangeUserName } = useContext(GlobalContext)

    return (
        <div>
            <input type="search" value={userName} onChange={onChangeUserName} placeholder="Search for a GitHub user..." />
            <button type="submit" value="Search" onClick={onSubmitForm} >submit</button>
        </div>
    )

}

export default SearchComponent