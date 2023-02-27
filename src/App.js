import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import React from "react";
import css from './App.css'
import {MoviesList, Trends, UserInfo} from "./components";
import {MovieInfo} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TvList} from "./components/TvList/TvList";
import {TvInfo} from "./components/TvInfo/TvInfo";
import {GenreInfoMovie} from "./components/GenreInfoMovie/GenreInfoMovie";
import {Search} from "./components/Search/Search";


const App = () => {

  return (
      <div className={css}>
         <Routes>
             <Route path={''} element={<MainLayout/>}>
                 <Route index element={<Trends/>}/>
                 <Route path={':genreId'} element={<GenreInfoMovie/>}/>
                 <Route path={'movies/:id' } element={<MovieInfo/>}/>
                 <Route path={'tv/:id' } element={<TvInfo/>}/>
                 <Route path={'movies'} element={<MoviesList/>}/>
                 <Route path={'tv'} element={<TvList/>}/>
                 <Route path={'profile'} element={<UserInfo/>}/>
                 <Route path={'/search/:word'} element={<Search/>}/>
             </Route>
         </Routes>
      </div>
  )
}
export {App};
