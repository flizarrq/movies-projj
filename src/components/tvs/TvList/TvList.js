import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesActions} from "../../../redux";
import css from "../../Trends/Trends.module.css";
import {TVListCard} from "../TvListCard/TvListCard";

const TvList = () => {

    const dispatch = useDispatch();

    const {tv_shows,genresTv} = useSelector(state => state.movies);
    const [page,setPage] = useState(1);


    useEffect(() => {
        dispatch(moviesActions.tv_shows({page}))
        dispatch(moviesActions.getGenresTv())
    }, [dispatch,page])

    const results = tv_shows.results
    console.log(results);

    return (
        <div className={css.Main}>
            <h1>TV</h1>
            <div className={css.Grid}>
                {results &&
                    results.map(post => <TVListCard key={post.id} post={post}/>)
                }
            </div>
            <div className={css.Buttom}>
                <div>
                    <button disabled={tv_shows===1} onClick={() => setPage(page-1)} >-1</button>
                </div>
                <div>current: {tv_shows.page}</div>
                <div>
                    <button disabled={tv_shows===tv_shows.total_pages} onClick={() => setPage(page+1)} >+1</button>
                </div>
            </div>
        </div>
    )
}
export {TvList};