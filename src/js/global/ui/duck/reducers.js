import get from 'lodash/get'
import filter from 'lodash/filter'

import * as types from './types'

const INITIAL_STATE = {
  isLoading: false,
  liked: [],
  errorModalOpened: false
}

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.UPDATE_UI:
      return {
        ...state,
        isLoading: get(payload, 'isLoading')
      }

    case types.LIKE_MOVIE:{
      const { liked } = state
      return {
        ...state,
        liked: liked.includes( payload) ? filter(liked, item => item !== payload)  : [ payload, ...liked ].slice(0, 3)
      }
    }

    case types.OPEN_ERROR_MODAL:
      return {
        ...state,
        errorModalOpened: true
      }

    default:
      return state
  }
}

export default uiReducer