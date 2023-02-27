import {axiosService} from "./axiosService";
import {urls} from "../config";

const moviesService = {
    trends: (page) => axiosService.get(urls.trends+ `?page=${page}`),
    movies: (page) => axiosService.get(urls.movie+ `?page=${page}`),
    tv: (page) => axiosService.get(urls.tv+ `?page=${page}`),
    genres: () => axiosService.get(urls.genres),
    tv_genres: () => axiosService.get(urls.tv_genres),
    movieById: (id) => axiosService.get(urls.movieById(id)),
    tvById: (id) => axiosService.get(urls.tvById(id)),
    getVideos: (id) => axiosService.get(urls.videos(id)),
    getVideosTv: (id) => axiosService.get(urls.videosTv(id)),
    movieByGenreId: (id,page) => axiosService.get(urls.movieByGenreId(id)+ `&page=${page}`),
    search: (word,page) => axiosService.get(urls.search(word)+ `&page=${page}`)

}

export {
    moviesService
}