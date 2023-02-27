import css from './MovieInfo.module.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";

const MovieInfo = () => {

    const {id} = useParams();

    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movies);


    useEffect(() => {
        dispatch(moviesActions.byId({id}))
    },[dispatch])

    return (
        <div className={css.Main}>
            {movie &&
                <div>
                    <div>{movie.original_title}</div>
                    <div>image</div>
                    <div>watch trailer</div>
                </div>
            }
            {movie &&
                <div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.media_type}</div>
                    <div>{movie.original_language}</div>
                    <div>{movie.overview}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.release_date}</div>
                </div>
            }

        </div>
    )
}
export {MovieInfo};