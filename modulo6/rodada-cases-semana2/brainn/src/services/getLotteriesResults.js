import axios from "axios"
import { BASE_URL } from "../constants/BaseUrl"

export const getLotteriesResults = (id, setState) => {

    axios.get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
            setState(res.data)
        })
        .catch((error) => {
            setState(false)
        })

}