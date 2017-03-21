import {
  SET_LOCATION
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
    console.log('SET LOCATION REDUCER:', action.payload)
      return {...state, location: action.payload }
    default:
      return state
  }
}