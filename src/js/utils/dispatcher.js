import React, { Component } from 'react'
import isFunction from 'lodash/isFunction'
import forEach from 'lodash/forEach'
import merge from 'lodash/merge'
import get from 'lodash/get'
import qs from 'qs'

class Dispatcher extends Component {
  componentWillMount = () => {
    const actions = get(this, 'props.actions')

    const store = get(this, 'props.store')
    const params = get(this, 'props.match.params')
    const query = qs.parse(get(this, 'props.location.search'), { ignoreQueryPrefix: true })

    forEach(actions, action =>
      isFunction(action) && store.dispatch(action(merge(params, query))))
  }

  render = () => {
    return null
  }
}

const dispatcher = (store, ...actions) => (props) =>
  <Dispatcher store={store} actions={actions} {...props} />

export default dispatcher
