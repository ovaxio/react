import * as types from './types'

const INITIAL_STATE = {}

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ENTER_MOVIES_SUCCESS:
      return {
        ...state,
        search: payload.Search,
        totalResults: payload.totalResults
      }

    case types.ENTER_MOVIE_SUCCESS:
      return {
        ...state,
        details: { ...payload },
      }

    default:
      return state
  }
}

export default moviesReducer