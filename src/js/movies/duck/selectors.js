import get from 'lodash/get'

export const getMovies = state => get(state, 'movies.search', [])
export const getNbTotalResults = state => parseInt(get(state, 'movies.totalResults', 0), 10)
export const getMovieDetails = state => get(state, 'movies.details')
