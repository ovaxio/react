import * as types from './types'

export const enterMovies = payload => ({
  type: types.ENTER_MOVIES,
  payload
})

export const enterMoviesSuccess = payload => ({
  type: types.ENTER_MOVIES_SUCCESS,
  payload
})

export const enterMovie = payload => ({
  type: types.ENTER_MOVIE,
  payload
})

export const enterMovieSuccess = payload => ({
  type: types.ENTER_MOVIE_SUCCESS,
  payload
})