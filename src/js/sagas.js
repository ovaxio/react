import { all, fork } from 'redux-saga/effects'
import { sagas as home } from 'js/home/duck'
import { sagas as movies } from 'js/movies/duck'

export default function* () {
  yield all([
    fork(home),
    fork(movies),
  ])
}
