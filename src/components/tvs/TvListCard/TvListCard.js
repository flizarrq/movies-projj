import css from '../../movies/MoviesListCard/MoviesListCard.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const TVListCard = ({post}) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    const {genresTv} = useSelector(state => state.movies);

    function getTvGenres(tvGenres, allGenres) {
        return tvGenres.map((genreID) => {
            const genre = allGenres.find((g) => g.id === genreID);
            if (genre) {
                return { id: genreID, name: genre.name };
            } else {
                return { id: genreID, name: "Drama" };
            }
        });
    }
    const tvGenresWithNames = getTvGenres(post.genre_ids, genresTv);

    console.log(post);
    return (
        <div className={css.Main}>
            <div>
                <img className={css.img} src={baseUrl + post.poster_path} alt=""/>
            </div>
            <div>
                <div>
                    <Link to={`/tv/${post.id}`} className={css.title}>{post.original_name}</Link>
                </div>
                <div className={css.Genres}>
                    <div>{post.first_air_date && post.first_air_date.slice(0,4)},</div>
                    {/*<div className={css.GenreresFirst}>{tvGenresWithNames[0].name} {tvGenresWithNames[1] ? ',': '' }</div>*/}
                    {/*<div>{tvGenresWithNames[1] && tvGenresWithNames[1].name}</div>*/}
                    <div>{JSON.stringify(tvGenresWithNames[0])}</div>
                </div>
            </div>
        </div>
    )
}
export {TVListCard};