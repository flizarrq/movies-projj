import {axiosService, axiosServiceImage} from "./axiosService";
import {urls} from "../config";

const moviesService = {
    trends: () => axiosService.get(urls.trends),
    movies: () => axiosService.get(urls.movie),
    tv: () => axiosService.get(urls.tv),
    poster: (link) => axiosServiceImage(link)
}

export {
    moviesService
}