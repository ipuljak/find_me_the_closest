// Main index requirements
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Main requirements to handle state
import reducers from './reducers'

// Main index component
import App from './core/app'
import Home from './routes/home'
import Coffee from './routes/coffee'

// Create the redux store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route name='coffee' path='/coffee' component={Coffee} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
)