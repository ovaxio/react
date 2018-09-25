import request from 'axios'
import reduce from 'lodash/reduce'
import { API_URL } from 'js/config'

const handleResponse = ({ data }) => {
  if (data.Error) {
    throw data.Error
  }
  return data
}

export const get = params =>
  request.get(
    API_URL + constructParams(params)
  )
  .then(handleResponse)


const constructParams = params => reduce(params, (mem, value, item) => `${mem}&${item}=${value}`, '')
