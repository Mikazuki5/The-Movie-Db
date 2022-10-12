import { MovieRestApiServices } from "@/Services/RestApi/MovieRestApi";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
let movieRestServices = new MovieRestApiServices()

const initialState = {
  isLoading: false,
}

const MovieStore = createSlice({
  name: 'MovieStore',
  initialState,
  reducers: {
    setLoading(state: any, action: PayloadAction<any>) {
      state.isLoading = action.payload
    },
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

export const { setLoading } = MovieStore.actions
export default MovieStore.reducer;