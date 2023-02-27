import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import axios from "axios";

const initialState =  {
    movies: [],
    tv_shows: [],
    trends: [],
    error: null,
    genresAll: [],
    movie: null
};


const getGenres = createAsyncThunk(
    'movieSLice/genres',
    async (_,thunkAPI) => {
        try {
            const {data} = await moviesService.genres();
            return data.genres

        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    });


const trends = createAsyncThunk(
    'moviesSlice/trends',
    async (_,thunkAPI) => {
        try {
            const {data} = await moviesService.trends();
            return data;
        } catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const byId = createAsyncThunk(
    'moviesSlice/byId',
    async ({id},thunkAPI) => {
        try {
            const {data} = await moviesService.movieById(id);
            return data
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(trends.fulfilled, (state, action) => {
                state.trends = action.payload;
                console.log(state.trends);
            })
            .addCase(trends.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(getGenres.fulfilled, (state,action) => {
                state.genresAll = action.payload
            })
            .addCase(byId.fulfilled, (state, action) => {
                state.movie = action.payload
            })

});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {
    trends,
    getGenres,
    byId
}

export {
    moviesReducer,
    moviesActions
}