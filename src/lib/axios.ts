import axios from 'axios'

const api = axios.create({
    url: process.env.URL_API,
    headers: { 'Content-Type': 'application/json' },
})

export default api