import React, { Component } from 'react'

import SearchBar from './search_bar'

class Home extends Component {
  render() {
    return (
      <div className="container center">
        <div className="logo">
          <h1>Find Me The Closest...</h1>
          <p>Find the nearest coffee shop, gas station, or grocery store with this simple to use application! Enter a precise location or leave blank to use your browser settings!</p>
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default Home