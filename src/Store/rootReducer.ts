import { combineReducers } from "@reduxjs/toolkit";
import theme from './Theme'
import MovieStore from './Movie'

export const reducers = combineReducers({
  theme,
  MovieStore
})