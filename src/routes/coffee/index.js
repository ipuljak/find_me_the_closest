import React, { Component } from 'react'

import SimpleMap from '../../core/map'
import Menu from './menu'

class Coffee extends Component {
  render() {
    const location = {
      lat: 43.6899507,
      lng: -79.7676969
    }

    const markers = [
      {
        location: {
          lat: 43.6899507,
          lng: -79.7676969
        }
      }
    ]

    return (
      <div className="map">
        <SimpleMap
          center={location}
          markers={markers} />
        <Menu />
      </div>
    )
  }
}

export default Coffee