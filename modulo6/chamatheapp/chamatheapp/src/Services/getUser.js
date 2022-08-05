import axios from 'axios'
import { BASE_URL } from '../Constant/Url'

const Header = {
    Headers: {
        Authorization: "application/vnd.github.v3+json"
    }
}

export const getUser = async (userName) => {
    if (userName !== "null") {
        try {
            const { data } = await axios.get(`${BASE_URL}/${userName}`, Header)
            return [data]
        } catch (error) {

        }
    }
}

export default getUser