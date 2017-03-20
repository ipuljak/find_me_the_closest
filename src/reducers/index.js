import { combineReducers } from 'redux'

import appReducer from './app_reducer'

// Combine the reducers to form the root reducer
const rootReducer = combineReducers({
  app: appReducer
})

export default rootReducer