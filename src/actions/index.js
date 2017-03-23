import axios from 'axios'

import {GOOGLE_MAP_API_KEY} from '../config'

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address='

import {
  SET_LOCATION
} from './types'

/**
 *  Set the location of the given coordinates
 */
export const setLocation = coordinates => {
  return {
    type: SET_LOCATION,
    payload: coordinates
  }
}

/**
 *  Fetch the coordinates of a search term
 */
export const fetchLocation = search => {
  const API_CALL = `${ROOT_URL}${search}&key=${GOOGLE_MAP_API_KEY}`
  console.log(API_CALL)
  return dispatch => {
    axios.get(API_CALL)
      .then(response => {
        dispatch(setLocation(response.data.results[0].geometry.location))
      })
  }
}