import axios from "axios";

const BASE_URL = "http://localhost:3003/"


export const requestInsert = async (from) => {
    try {
        await axios.post(`${BASE_URL}participation/insert`,from)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestSelect = async (getall,setloader) => {
    setloader(true)
    try {
        const result =  await axios.get(`${BASE_URL}participation/select`)
        setloader(false)
        getall(result.data)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestPut = async (form) => {
    try {
        await axios.put(`${BASE_URL}participation/update`,form)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestDelete = async (form) => {
    try {
        await axios.delete(`${BASE_URL}participation/delete`,{data:form})
    } catch (error) {
        console.log(error.response.data)
    }
}

