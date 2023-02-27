import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesActions} from "../../redux";
import css from "../Trends/Trends.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies);
    const [page,setPage] = useState(1);


    useEffect(() => {
        dispatch(moviesActions.movies({page:page}))
    }, [dispatch,page])

    const results = movies.movies.results

console.log(movies.movies);

    return (
            <div className={css.Main}>
                <h1>Movies</h1>
                <div className={css.Grid}>
                    {results &&
                        results.map(post => <MoviesListCard key={post.id} post={post}/>)
                    }
                </div>
                <div className={css.Buttom}>
                    <div>
                        <button disabled={page===1} onClick={() => setPage(page-1)} >-1</button>
                    </div>
                    <div>current: {movies.movies.page}</div>
                    <div>
                        <button disabled={page===movies.movies.total_pages} onClick={() => setPage(page+1)} >+1</button>
                    </div>
                </div>
            </div>
    )
}
export {MoviesList};