import {useEffect} from "react";
import css from './player.module.css'

import {Container} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

function TvPlayer({tv}) {

    const dispatch = useDispatch();
    const {showPlayer, videosTv} = useSelector(state => state.movies);
    // console.log(tv);

    useEffect(() => {
        dispatch(moviesActions.videosTv({id: tv.id}))
    },[dispatch])


    const trailers = videosTv?.results?.filter((video) => video.type === "Trailer");


    let trailerLink = ''

    if (trailers?.length > 0) {
        trailerLink = `${trailers[0].key}`;
    }


    return <div className={css.Main}>
        <Container>
            <div className={css.Player}>
                <div className="ratio ratio-16x9">
                    <iframe src={ trailerLink && `https://www.youtube.com/embed/${trailerLink}`}
                            title="YouTube video" allowFullScreen
                    ></iframe>
                </div>

            </div>
            <div onClick={() => dispatch(moviesActions.showPlayer(!showPlayer))} className={css.Button}>
                close
            </div>
        </Container>
    </div>
}
export {TvPlayer}