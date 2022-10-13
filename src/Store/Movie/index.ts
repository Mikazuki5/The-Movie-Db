import { MovieRestApiServices } from "@/Services/RestApi/MovieRestApi";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
let movieRestServices = new MovieRestApiServices()

const initialState = {
  isLoading: false,
  watchListData: undefined
}

const MovieStore = createSlice({
  name: 'MovieStore',
  initialState,
  reducers: {
    setLoading(state: any, action: PayloadAction<any>) {
      state.isLoading = action.payload
    },
    setWatchListData(state, action) {
      return {
        ...state,
        watchListData: action.payload
      }
    }
  }
})

export const fetchTopRateMovie = createAsyncThunk(
  'MovieStore/fetch-top-rate-movie',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.topRatedMovie(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      return rejectWithValue(error)
    }
  }
)

export const fetchTopRateTv = createAsyncThunk(
  'MovieStore/fetch-top-rate-tv',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.topRatedTv(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      
    }
  }
)

export const fetchDataTrending = createAsyncThunk(
  'MovieStore/fetch-data-trending',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.trending(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      
    }
  }
)

export const fetchDataNowPlaying = createAsyncThunk(
  'MovieStore/fetch-data-nowPlaying',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.nowPlaying(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      
    }
  }
)

export const fetchDataUpcomingMovie = createAsyncThunk(
  'MovieStore/fetch-data-upcoming',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.upcomingMovie(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      
    }
  }
)

export const fetchDataPopularMovie = createAsyncThunk(
  'MovieStore/fetch-data-popular-movie',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const res = await movieRestServices.popularMovie(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading(false));
        params?.callback(res, 200);
      }
      dispatch(setLoading(false));
      return rejectWithValue(res)
    } catch (error: any) {
      dispatch(setLoading(false));
      params?.callback(error, 400);
      
    }
  }
)

export const watchListDatas = createAsyncThunk(
  'MovieStore/setWatchlist',
  async (params:{payload:any; callback: (status:any) => void}, {dispatch}) => {
    try {
      dispatch(setWatchListData(params.payload))
      params.callback(200)
    } catch {
      params.callback(400)
    }
  }
)

export const { setLoading, setWatchListData } = MovieStore.actions
export default MovieStore.reducer;