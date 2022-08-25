import React, { useState, createContext } from "react";

export const context = createContext()


export const ContextProvider = props => {
    const [userData, setUserData] = useState({})
    const [repos, setRepos] = useState([])


    return (
        <context.Provider value={{
            userData,
            repos,
            setRepos,
            setUserData
        }}>
            {props.children}
        </context.Provider>
    )
}