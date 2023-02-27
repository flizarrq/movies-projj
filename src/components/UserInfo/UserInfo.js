import ded from '../../images/ded.png'
import css from './UserInfo.module.css'
const UserInfo = () => {

    return (
        <div className={css.bc}>
            <div className={css.Main}>
                <h5>Setting:</h5>
                <div>username: igor link</div>
                <div>gmail: roberto@gmail.com</div>
                <div>avatar</div>
                <div className={css.image}>
                    <img className={css.img} src={ded} alt=""/>
                    <div className={css.choose}>choose image</div>
                </div>
            </div>
        </div>
    )
}
export {UserInfo};