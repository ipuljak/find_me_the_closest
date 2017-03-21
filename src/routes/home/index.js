import React, { Component } from 'react'

import Icons from './icons'
import SearchBar from './search_bar'

class Home extends Component {
  render() {
    return (
      <div className="container center">
        <div className="logo">
          <h1>Find Me The Closest...</h1>
          <p>Find the nearest coffee shop, gas station, or grocery store with this simple to use application!</p>
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default Home