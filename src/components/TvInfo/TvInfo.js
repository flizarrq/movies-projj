import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import css from "../MovieInfo/MovieInfo.module.css";
import {TvPlayer} from "../stuff/Tvplayer";

const TvInfo = () => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams();

    const dispatch = useDispatch();
    const {tv,showPlayer} = useSelector(state => state.movies);


    useEffect(() => {
        dispatch(moviesActions.byIdTv({id}))
    },[dispatch])


    return (
        <div className={css.BColor}>
            <div className={css.Main} >
                <h5 className={css.Title}>{tv && tv.original_title}</h5>
                <div className={css.Block}>
                    {tv &&
                        <div>
                            <img className={css.img} src={`${baseUrl}/${tv.poster_path}`} alt=""/>
                            <div className={css.trailer} onClick={() => dispatch(moviesActions.showPlayer(!showPlayer))} >watch trailer</div>
                        </div>
                    }
                    {tv &&
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
                                <div>{tv.vote_average}</div>
                                <div>{tv.release_date}</div>
                                {/*<div>{tv.production_countries[0].name}</div>*/}
                                {/*<div>{tv.production_companies[0].name}</div> */}
                                <div>{tv.genres.map((genre, index) => (index === tv.genres.length - 1)
                                    ? `${genre.name}` : `${genre.name}, `)}</div>
                                {/*<div>original language: {movie.original_language}</div>*/}
                                <div>{tv.spoken_languages[0].name}</div>
                                <div>{tv.runtime+' min'}</div>
                                <div>{tv.popularity}</div>
                                <div>{tv.adult.toString()}</div>
                                <div>{tv.budget+'$'}</div>
                            </div>
                        </div>
                    }
                </div>
                <div>
                    <div>
                        <h5 className={css.movieName}>
                            What's the movie "{tv && tv.original_name}" about:
                        </h5>
                    </div>
                    {tv &&
                        <div>overview: {tv.overview}</div>}
                </div>

                {showPlayer&& <div>
                    <TvPlayer tv={tv}/>
                </div>}

            </div>
        </div>
    )
}
export {TvInfo};