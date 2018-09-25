import * as types from './types'

export const updateUi = payload => ({
  type: types.UPDATE_UI,
  payload
})

export const like = payload => ({
  type: types.LIKE_MOVIE,
  payload
})

export const openErrorModal = payload => ({
  type: types.OPEN_ERROR_MODAL,
  payload
})

export const closeModal = () => ({
  type: types.CLOSE_MODAL
})