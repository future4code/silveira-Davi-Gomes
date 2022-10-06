import axios from 'axios'
import {BASE_URL} from "../Constant/Url"

const headers = {
    headers: {
        Authorization: "application/vnd.github.v3+json"
    },
}

export const getUserRepo = async (username) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${username}/repos`, headers)

        return data

    } catch (error) {

    }
}

export default getUserRepo