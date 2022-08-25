import axios from 'axios'

const api = axios.create({
    BASE_URL: 'https://api.github.com/users'
})

export default api