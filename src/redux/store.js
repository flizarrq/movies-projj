import {combineReducers} from "redux";
import {moviesReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    movies: moviesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}