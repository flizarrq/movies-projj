const baseURL = 'https://api.themoviedb.org/3'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTNiOGNmNjY2NThhM2QwODJiMzg3ZjMyNGE5OTg2YSIsInN1YiI6IjYzNTJkMGNhZ' +
    'jNiNDlhMDA4NjI0OTNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0FlB5I7KILJzMAwB5itR-dGOzEyz84jKyF_Ld3vcGc\n'

const urls = {
    trends: '/trending/movie/day',
    movie: '/discover/movie',
    tv: '/discover/tv',
}

export {
    urls,
    token,
    baseURL,
}