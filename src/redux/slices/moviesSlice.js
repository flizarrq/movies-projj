import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState =  {
    movies: [],
    tv_shows: [],
    trends: [],
    error: null
};

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
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {
    trends
}

export {
    moviesReducer,
    moviesActions
}