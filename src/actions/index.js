import {
  SET_LOCATION
} from './types'

/**
 *  Set the location of the search term
 */
export const setLocation = location => {
  return {
    type: SET_LOCATION,
    payload: location
  }
}