import axios from "axios";
import {baseURl, token} from "../config";

const axiosService = axios.create({baseURl});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    axiosService
}
