import axios from "axios";
import {baseURL,token} from "../config";

const axiosService = axios.create({baseURL});

const axiosServiceImage = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500',
    headers:{
        'Authorization': `Bearer ${token}`
    }
})

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    axiosService,
    axiosServiceImage
}
