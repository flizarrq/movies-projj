import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './Trends.module.css'

const Trends = () => {

    const dispatch = useDispatch();
    const {trends,error} = useSelector(state => state.movies);

    useEffect(()=> {
        dispatch(moviesActions.trends())
        dispatch(moviesActions.getGenres())

    },[dispatch])


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
                button
            </div>
        </div>
    )
}
export {Trends};