// reducers.js
import * as types from './types'

const INITIAL_STATE = {}

const homeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ENTER_HOME:
      return state

    default:
      return state
  }
}

export default homeReducer