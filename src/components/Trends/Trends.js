import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../movies/MoviesListCard/MoviesListCard";
import css from './Trends.module.css'

const Trends = () => {

    const dispatch = useDispatch();
    const {trends,error} = useSelector(state => state.movies);
    const [page,setPage] = useState(1);

    useEffect(()=> {
        dispatch(moviesActions.trends({page:page}))
        dispatch(moviesActions.getGenres())

    },[dispatch,page])


    const results = trends.results


    return (
        <div className={css.Main}>
            <h1>Trending</h1>
            <div className={css.Grid}>
                {results &&
                results.map(post => <MoviesListCard key={post.id} post={post}/>)
                }
            </div>
            <div className={css.Buttom}>
                <div>
                    <button disabled={page===1} onClick={() => setPage(page-1)} >-1</button>
                </div>
                <div>current: {trends.page}</div>
                <div>
                    <button disabled={page===trends.total_pages} onClick={() => setPage(page+1)} >+1</button>
                </div>
            </div>
        </div>
    )
}
export {Trends};