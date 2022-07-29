import React from "react"
import GlobalStateContext from "../Global/GlobalState"

// import {  Details,Lorteryfield,Select,Title } from ""


const LoteryArea = () => {
    const { lotteriesResult, lotteriesId, lotteries, setLotteriesId } =
        useContext(GlobalStateContext)
        
    }
const loteryOptions = lotteries.map((lotery) => {
    return (
        <option key={lotery.id} value={lotery.id}>{lotery.nome.toUpperCase()}</option>
    )
})
function onChangeLotery(event){ 
    setLotteriesId(Number(event.target.value))
}

