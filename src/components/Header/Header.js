import css from './Header.module.css'
import ded from '../../images/ded.png'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
const Header = () => {
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();

    const forma = ({word}) => {
        // console.log(word);
        navigate(`/search/${word}`)
        dispatch(moviesActions.setPageSearch(1))
        // reset()
    };

    return (
        <div className={css.Header}>
            <NavLink  to='/'>home</NavLink>
            <div>dark/light</div>
            <NavLink to={'movies'}>movies</NavLink>
            <NavLink to={'tv'}>tv</NavLink>
            <form onSubmit={handleSubmit(forma)}>
                <input type="text" {...register('word')}/>
                <button>search</button>
            </form>
            <div onClick={() => navigate('profile')}  className={css.Profile}>
                <div>igor link</div>
                <img className={css.img} src={ded} alt="userImage"/>
            </div>
        </div>
    )
}
export {Header};