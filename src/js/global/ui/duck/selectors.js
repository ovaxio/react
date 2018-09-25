import get from 'lodash/get'
export const getLiked = state => get(state, 'ui.liked', [])
export const isErrorModalOpened = state => get(state, 'ui.errorModalOpened', false)
