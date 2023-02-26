import css from './Header.module.css'
import ded from '../../images/ded.png'
const Header = () => {

    return (
        <div className={css.Header}>
            <div>home</div>
            <div>dark/light</div>
            <div>movies</div>
            <div>tv</div>
            <div>
                <input type="text"/>
                <button>search</button>
            </div>
            <div className={css.Profile}>
                <div>igor link</div>
                <img src={ded} alt="userImage"/>
            </div>
        </div>
    )
}
export {Header};