import React, { useState } from 'react'
import GlobalContext from "./GlobalContext"
import getUser from "../Services/getUser"
import getUserRepo from "../Services/getUserRepo"

const GlobalState = (props) => {

    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState([])
    const [userRepo, setUserRepo] = useState([])
    const [history, setHistory] = useState([])
    async function fetchData() {
        if (userName !== "") {
            setUserData(await getUser(userName))
            setUserRepo(await getUserRepo(userName))
        } else if (!userName) {
            setUserName(false)
        }

    }
    function onChangeUserName(event) {
        setUserName(event.target.value)
    }
    function onSubmitForm(event) {
        event.preventDefault()
        fetchData(userName)
        setUserName("")
    }

    const data = {
        userData,
        userName,
        userRepo,
        history,
        setHistory,
        onChangeUserName,
        onSubmitForm
    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState