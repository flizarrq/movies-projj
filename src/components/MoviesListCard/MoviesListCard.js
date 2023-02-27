import css from './MoviesListCard.module.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const MoviesListCard = ({post}) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    const {genresAll} = useSelector(state => state.movies);

    function getMovieGenres(movieGenres, allGenres) {
        return movieGenres.map((genreID) => {
            const genre = allGenres.find((g) => g.id === genreID);
            if (genre) {
                return { id: genreID, name: genre.name };
            } else {
                return { id: genreID, name: "Unknown" };
            }
        });
    }

    const movieGenresWithNames = getMovieGenres(post.genre_ids, genresAll);

    return (
            <div className={css.Main}>
                <div>
                    <img src={baseUrl + post.poster_path} alt=""/>
                </div>
                <div>
                    <div>
                        <Link to={`movies/${post.id}`} className={css.title}>{post.original_title}</Link>
                    </div>
                    <div className={css.Genres}>
                        <div>{post.release_date.slice(0,4)},</div>
                        <div className={css.GenreresFirst}>{movieGenresWithNames[0].name}{movieGenresWithNames[1] ? ',': '' }</div>
                        <div>{movieGenresWithNames[1] && movieGenresWithNames[1].name}</div>
                    </div>
                </div>
            </div>
    )
}
export {MoviesListCard};