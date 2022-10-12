import { MovieRestApiServices } from "@/Services/RestApi/MovieRestApi";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
let movieRestServices = new MovieRestApiServices()

const initialState = {
  TopRatedMovies: {
    data: null,
    isLoading: false,
    total_pages: 0,
    total_result: 0
  }
}

const MovieStore = createSlice({
  name: 'MovieStore',
  initialState,
  reducers: {
    setLoading(state: any, action: PayloadAction<any>) {
      state[action.payload.attribute] = {
        ...state[action.payload.attribute],
        isLoading: action.payload.isLoading,
      };
    },
    setDataTopRatedMovies(state: any, action: any){
      state.TopRatedMovies = {
        ...state,
        data: action.payload.results,
        total_pages: action.payload.total_pages,
        total_result: action.payload.total_result,
      }
    }
  }
})

export const fetchTopRateMovie = createAsyncThunk(
  'MovieStore/fetch-top-rate-movie',
  async (params:{payload:any; callback: (action:any, status:any) => void}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading({attribute: 'TopRatedMovies', isLoading: true}));
      const res = await movieRestServices.topRatedMovie(params.payload).toPromise();
      if (res?.results) {
        console.log('res: ', res.results)
        dispatch(setLoading({attribute: 'TopRatedMovies', isLoading: false}));
        dispatch(setDataTopRatedMovies({results: res?.results, total_pages: res?.total_pages, total_result: res?.total_result}))
        params?.callback(res, 200);
      }
      dispatch(setLoading({attribute: 'TopRatedMovies', isLoading: false}));
    } catch (error: any) {
      dispatch(setLoading({attribute: 'TopRatedMovies', isLoading: false}));
      params?.callback(error, 400);
      console.log('err: ', error.response)
      
    }
  }
)

export const { setLoading, setDataTopRatedMovies } = MovieStore.actions
export default MovieStore.reducer;