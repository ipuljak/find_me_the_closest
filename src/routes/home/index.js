import React, { Component } from 'react'

import SearchBar from './search_bar'

class Home extends Component {
  render() {
    return (
      <div className="center">
        <div className="logo">
          <h1>Find Me The Closest...</h1>
          <p>Find any location easily with this application!</p>
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default Home