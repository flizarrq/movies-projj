import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import React from "react";
import css from './App.css'
import {Trends} from "./components/Trends/Trends";
import {MovieInfo} from "./components";

const App = () => {

  return (
      <div className={css}>
         <Routes>
             <Route path={''} element={<MainLayout/>}>
                 <Route index element={<Trends/>}/>
                 <Route path={'movies/:id' } element={<MovieInfo/>}/>
             </Route>
         </Routes>
      </div>
  )
}
export {App};
