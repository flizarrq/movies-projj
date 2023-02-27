import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../movies/MoviesListCard/MoviesListCard";
import css from './GenreInfoMovie.module.css'

const GenreInfoMovie = () => {
    const {genreId} = useParams();
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    const [page,setPage] = useState(1);


    useEffect(() => {
        dispatch(moviesActions.movieByGenreId({id: genreId,page:page}))
    },[dispatch,genreId,page])

    console.log(page);

    const results = movies.results;
    return (
        <div className={css.bc}>
            <div className={css.Main}>
                {results && results.map(res => <MoviesListCard key={res.id} post={res}/>)}
            </div>
            <div className={css.Bottom}>
                <div>
                    <button disabled={page===1} onClick={() => setPage(page-1)} >-1</button>
                </div>
                <div>current: {movies.page}</div>
                <div>
                    <button disabled={page===movies.total_pages} onClick={() => setPage(page+1)} >+1</button>
                </div>
            </div>

        </div>
    )
}
export {GenreInfoMovie};