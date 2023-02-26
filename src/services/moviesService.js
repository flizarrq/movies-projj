import {axiosService} from "./axiosService";
import {urls} from "../config";

const moviesService = {
    trends: () => axiosService.get(urls.trends),
    movies: () => axiosService.get(urls.movie),
    tv: () => axiosService.get(urls.tv)
}

export {
    moviesService
}