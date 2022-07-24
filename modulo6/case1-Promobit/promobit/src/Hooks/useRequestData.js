import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_KEY_AND_LANGUAGE, BASE_URL } from '../constants/constants'

export function useRequestData(initialState, endpoint) {
    const [data, setData] = useState(initialState)
    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}${endpoint}${API_KEY_AND_LANGUAGE}`)

            setData(response)
        } catch (error) {
            alert("ocorreu um erro na reqisição, por favor tente novamente")
        }
    }
    useEffect(() => {
        getData() 
    },[endpoint])
    return { data, getData }
}