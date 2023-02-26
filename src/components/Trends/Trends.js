import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const Trends = () => {

    const dispatch = useDispatch();
    const {trends,error} = useSelector(state => state.movies);

    useEffect(()=> {
        dispatch(moviesActions.trends())
    },[dispatch])

    console.log(trends);

    return (
        <div>
            {error && JSON.stringify(error)}
        </div>
    )
}
export {Trends};