import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.0:8000/api'
})

export default axiosInstance;