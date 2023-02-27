import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import axios from "axios";

const initialState =  {
    movies: [],
    tv_shows: [],
    trends: [],
    error: null,
    genresAll: [],
    genresTv: [],
    movie: null,
    tv: null,
    showPlayer: false,
    videos: [],
    videosTV:[],
    pageSearch: 1
};

const tv_shows = createAsyncThunk(
    'moviesSlice/tv_shows',
    async ({page},thunkAPI) => {
        try {
            const {data} = await moviesService.tv(page)
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieByGenreId = createAsyncThunk(
    'moviesSlice/movieByGenreId',
    async ({id,page},thunkAPI) => {
        try {
            const {data} = await moviesService.movieByGenreId(id,page)
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'moviesSlice/search',
    async ({word,pageSearch}, thunkAPI) => {
        try {
            const {data} = await moviesService.search(word,pageSearch);
            return data
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)

        }
    }
);

const movies = createAsyncThunk(
    'moviesSlice/movies',
    async ({page},thunkAPI) => {
        try {
            const {data} = await moviesService.movies(page)
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const videosTv = createAsyncThunk(
    'moviesSlice/videosTv',
    async ({id},thunkAPI) => {
        try {
            const {data} = await moviesService.getVideosTv(id);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const videos = createAsyncThunk(
    'moviesSlice/videos',
    async ({id},thunkAPI) => {
        try {
            const {data} = await moviesService.getVideos(id);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getGenresTv = createAsyncThunk(
    'movieSLice/getGenresTv',
    async (_,thunkAPI) => {
        try {
            const {data} = await moviesService.tv_genres();
            return data.genres

        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    });

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
    async ({page},thunkAPI) => {
        try {
            const {data} = await moviesService.trends(page);
            return data;
        } catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const byIdTv = createAsyncThunk(
    'moviesSlice/byIdTv',
    async ({id},thunkAPI) => {
        try {
            const {data} = await moviesService.tvById(id);
            return data
        }catch (e){
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
        showPlayer: (state, action) => {
            state.showPlayer = action.payload;
        },
        setPageSearch: (state, action) => {
            state.pageSearch = action.payload
        }
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
            .addCase(videos.fulfilled, (state,action) => {
                state.videos = action.payload
            })
            .addCase(movies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(tv_shows.fulfilled, (state, action) => {
                state.tv_shows = action.payload
            })
            .addCase(byIdTv.fulfilled, (state, action) => {
                state.tv = action.payload
            })
            .addCase(videosTv.fulfilled, (state, action) => {
                state.videosTV = action.payload
            })
            .addCase(getGenresTv.fulfilled, (state, action) => {
                state.genresTv = action.payload
            })
            .addCase(movieByGenreId.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(search.fulfilled, ( state, action) => {
                state.movies = action.payload
            })

});

const {reducer: moviesReducer, actions: {showPlayer,setPageSearch}} = moviesSlice;

const moviesActions = {
    trends,
    getGenres,
    byId,
    showPlayer,
    videos,
    movies,
    tv_shows,
    byIdTv,
    videosTv,
    getGenresTv,
    movieByGenreId,
    search,
    setPageSearch

}

export {
    moviesReducer,
    moviesActions
}