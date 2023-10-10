import axios from 'axios'

const BASE URL = "http://127.0.0.1:8080/api"

const api = axios.create({
    baseURL: BASE_URL,
    defaults: {
        headers: {
            "Access-Control-Allow-Otigin":"*",
        },
    },
})
export default api