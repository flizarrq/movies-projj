import css from './Header.module.css'
import ded from '../../images/ded.png'
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <div className={css.Header}>
            <Link to={'/'}>home</Link>
            <div>dark/light</div>
            <div>movies</div>
            <div>tv</div>
            <div>
                <input type="text"/>
                <button>search</button>
            </div>
            <div className={css.Profile}>
                <div>igor link</div>
                <img className={css.img} src={ded} alt="userImage"/>
            </div>
        </div>
    )
}
export {Header};