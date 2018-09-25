import { get } from 'js/utils/api'

export const fetchMovies = () =>
  get({ s:'pirates',type: 'movie', r: 'json'})

export const fetchMovie = id =>
  get({ i: id, r: 'json', plot: 'full'})