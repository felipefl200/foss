import axios from 'axios'

const api = axios.create({
    url: process.env.NODE_ENV === 'development' ? process.env.URL_API_PROD : process.env.URL_API_LOCAL,
    headers: { 'Content-Type': 'application/json' },
})

export default api