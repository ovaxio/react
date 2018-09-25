import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import { configureStore } from 'js/configureStore'
import { routes } from 'js/routes'
import sagas from 'js/sagas'
import reducers from 'js/reducers'

import 'normalize.css'
import 'styles/index.less'

const store = configureStore(reducers)
store.runSaga(sagas)

const App = () => (
  <Provider store={store}>
    <Router>
      {routes(store)}
    </Router>
  </Provider>
)

export default App
