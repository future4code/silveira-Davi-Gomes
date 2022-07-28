import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../constants/BaseUrl'
import { getLotteriesResults } from "../services/getLotteriesResults"
import useRequestData from "../Hooks/useRequestData"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {

    const [ lotteriesResult, setLotteriesResult ] = useState()
    const [ lotteriesId, setLotteriesId ] = useState(0)

    const { data: lotteries } = useRequestData(`${BASE_URL}/loterias`, [])
    const { data: lotteriesContests } = useRequestData(`${BASE_URL}/loterias-concursos`, [])

    const loteryContestId = lotteriesContests[lotteriesId] && lotteriesContests[lotteriesId].concursoId

    useEffect(() => {
        if (loteryContestId) {
          getLotteriesResults(loteryContestId, setLotteriesResult)
        }
      }, [loteryContestId])

    const data = { lotteriesResult, lotteriesId, lotteries, setLotteriesId }


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState


