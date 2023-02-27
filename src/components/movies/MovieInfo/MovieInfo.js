import css from './MovieInfo.module.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../../redux";
import {Player} from "../../stuff/player";


const MovieInfo = () => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams();

    const dispatch = useDispatch();
    const {movie,showPlayer} = useSelector(state => state.movies);


    useEffect(() => {
        dispatch(moviesActions.byId({id}))
    },[dispatch])

    console.log(movie);




    return (
        <div className={css.BColor}>
            <div className={css.Main} >
                <h5 className={css.Title}>{movie && movie.original_title}</h5>
                <div className={css.Block}>
                    {movie &&
                        <div>
                            <img className={css.img} src={`${baseUrl}/${movie.poster_path}`} alt=""/>
                            <div className={css.trailer} onClick={() => dispatch(moviesActions.showPlayer(!showPlayer))} >watch trailer</div>
                        </div>
                    }
                    {movie &&
                        <div className={css.info}>
                            <div className={css.info_middle}>
                                <div>Ratings:</div>
                                <div>release date:</div>
                                <div>country:</div>
                                <div>company:</div>
                                <div>genres:</div>
                                {/*<div>original language: {movie.original_language}</div>*/}
                                <div>language:</div>
                                <div>runtime:</div>
                                <div>popularity</div>
                                <div>adult:</div>
                                <div>budget:</div>
                            </div>
                            <div>
                                <div>{movie.vote_average}</div>
                                <div>{movie.release_date}</div>
                                <div>{movie.production_countries[0].name}</div>
                                <div>{movie.production_companies[0].name}</div>
                                <div>{movie.genres.map((genre, index) => (index === movie.genres.length - 1)
                                    ? `${genre.name}` : `${genre.name}, `)}</div>
                                {/*<div>original language: {movie.original_language}</div>*/}
                                <div>{movie.spoken_languages[0].name}</div>
                                <div>{movie.runtime+' min'}</div>
                                <div>{movie.popularity}</div>
                                <div>{movie.adult.toString()}</div>
                                <div>{movie.budget+'$'}</div>
                            </div>
                        </div>
                    }
                </div>
                <div>
                    <div>
                        <h5 className={css.movieName}>
                            What's the movie "{movie && movie.original_title}" about:
                        </h5>
                    </div>
                    {movie &&
                        <div>overview: {movie.overview}</div>}
                </div>

                {showPlayer&& <div>
                    <Player movie={movie}/>
                </div>}

            </div>
        </div>
    )
}
export {MovieInfo};