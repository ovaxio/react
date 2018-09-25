import { put, takeEvery, all } from 'redux-saga/effects'
import * as types from './types'
import * as actions from 'js/actions'

function* flow() {
  yield all([
    takeEvery(types.ENTER_HOME, enterHome),
  ])
}

function* enterHome() {
  yield put(actions.updateUi({ isLoading: true }))
}

export default flow
