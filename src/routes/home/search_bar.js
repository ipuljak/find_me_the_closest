import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  // Focus on the search bar once it mounts and enter in the geolocation
  componentDidMount() {
    findDOMNode(this.refs.searchInput).focus()
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ term: position.coords.latitude + ', ' + position.coords.longitude })
    })
  }

  // When a location term is submitted
  buttonClick(type) {
    // Submit the location term
    if (this.state.term !== '') {
      this.props.fetchLocation(this.state.term)
    } else {
      // If no location term is given, use the geolocation
      navigator.geolocation.getCurrentPosition((position) => {
        let location = position.coords.latitude + ', ' + position.coords.longitude
        this.props.fetchLocation(location)
      })
    }
    //this.setState({term: ''});
  }

  // Update the search bar state for each key press
  handleOnChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div className="wrapper">
        <input
          className="searchBar"
          type="text"
          placeholder="Enter your location.."
          onChange={this.handleOnChange}
          value={this.state.term}
          ref="searchInput" />
        <div className="icons">
          <button onClick={() => this.buttonClick('car')}>
            <i className="fa fa-coffee" aria-hidden="true"></i>
          </button>
          <button onClick={() => this.buttonClick('car')}>
            <i className="fa fa-car" aria-hidden="true"></i>
          </button>
          <button onClick={() => this.buttonClick('grocery')}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(SearchBar)