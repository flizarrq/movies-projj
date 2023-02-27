import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../movies/MoviesListCard/MoviesListCard";
import css from './Search.module.css'

const Search = () => {

    const {word} = useParams();

    const dispatch = useDispatch();
    const {movies,pageSearch} = useSelector(state => state.movies);
    // const [pageSearch,setPageSearch] = useState(1);

    useEffect(() => {
        dispatch(moviesActions.search({word,pageSearch}))
    },[dispatch,word,pageSearch])

    const results = movies.results

    console.log(movies);
    return (
        <div className={css.bc}>
            <div >
                <div className={css.Main}>

                    {results?.length>1 ?
                        results.map(post => <MoviesListCard key={post.id} post={post}/>) : <div className={css.notFound}>
                            not found !
                        </div>
                    }
                </div>
                <div className={css.Bottom}>
                    <div>
                        <button disabled={pageSearch===1} onClick={() => dispatch(moviesActions.setPageSearch(pageSearch-1))} >-1</button>
                    </div>
                    <div>current: {movies.page}</div>
                    <div>
                        <button disabled={pageSearch===movies.total_pages} onClick={() => dispatch(moviesActions.setPageSearch(pageSearch+1))} >+1</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export {Search};