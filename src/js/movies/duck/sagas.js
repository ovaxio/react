import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as types from './types'
import * as actions from 'js/actions'
import { enterMoviesSuccess, enterMovieSuccess } from './actions'
import { fetchMovies, fetchMovie } from './api'

function* flow() {
  yield all([
    takeEvery(types.ENTER_MOVIES, enterMovies),
    takeEvery(types.ENTER_MOVIE, enterMovie),
  ])
}

function* enterMovies() {
  yield put(actions.updateUi({ isLoading: true }))

  const result = yield call(fetchMovies)
  yield put(enterMoviesSuccess(result))
  yield put(actions.updateUi({ isLoading: false }))

}

function* enterMovie({ payload }) {
  yield put(actions.updateUi({ isLoading: true }))

  const result = yield call(fetchMovie, payload.id)
  yield put(enterMovieSuccess(result))
}

export default flow
