import css from './MovieInfo.module.css'

const MovieInfo = ({post}) => {

    return (
        <div className={css.Main}>

            <div>
                <div>{post.original_title}</div>
                <div>image</div>
                <div>watch trailer</div>
            </div>

            <div>
                <div>{post.vote_average}</div>
                <div>{post.media_type}</div>
                <div>{post.original_language}</div>
                <div>{post.overview}</div>
                <div>{post.popularity}</div>
                <div>{post.release_date}</div>
            </div>

        </div>
    )
}
export {MovieInfo};