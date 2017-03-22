import React, {Component} from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'

class SimpleMap extends Component {
  render() {
    const mapContainer = <div style={{height: '70%', width: '100%'}}></div>

    return (
      <GoogleMapLoader
        containerElement = {mapContainer}
        googleMapElement = {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}>
          </GoogleMap>
        }
      />
    )
  }
}

export default SimpleMap

