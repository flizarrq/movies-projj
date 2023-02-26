import css from './MoviesListCard.module.css';
const MoviesListCard = ({post}) => {

    return (
        <div className={css.Main}>
            <div>{post.id}</div>
        </div>
    )
}
export {MoviesListCard};