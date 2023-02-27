import {Header} from "../components";
import {Link, Outlet} from "react-router-dom";
import css from './MainLayout.module.css'
import {useState} from "react";

const MainLayout = () => {

    const [show, setShow] = useState(false);
    return (
        <div>
            <Header/>
            <div onClick={() => setShow(!show)} className={css.block}>filter</div>
            { show && <div onClick={() => setShow(!show)} className={css.filter}>
                <div>
                    <Link to={'28'}>Action</Link>
                </div>
                <div>
                    <Link to={'12'}>Adventure</Link>
                </div>
                <div>
                    <Link to={'16'}>Animation</Link>
                </div>
                <div>
                    <Link to={'35'}>Comedy</Link>
                </div>
                <div>
                    <Link to={'80'}>Crime</Link>
                </div>
                <div>
                    <Link to={'99'}>Documentary</Link>
                </div>
                <div>
                    <Link to={'18'}>Drama</Link>
                </div>
                <div>
                    <Link to={'10751'}>Family</Link>
                </div>
                <div>
                    <Link to={'14'}>Fantasy</Link>
                </div>
                <div>
                    <Link to={'36'}>History</Link>
                </div>
                <div>
                    <Link to={'27'}>Horror</Link>
                </div>
                <div>
                    <Link to={'10402'}>Music</Link>
                </div>
                <div>
                    <Link to={'9648'}>Mystery</Link>
                </div>
                <div>
                    <Link to={'10749'}>Romance</Link>
                </div>
                <div>
                    <Link to={'10770'}>TV Movie</Link>
                </div>
                <div>
                    <Link to={'53'}>Thriller</Link>
                </div>
                <div>
                    <Link to={'10752'}>War</Link>
                </div>
                <div>
                    <Link to={'37'}>Western</Link>
                </div>
                <div>

                </div>
            </div>}
            <Outlet/>
        </div>
    )
}
export {MainLayout};