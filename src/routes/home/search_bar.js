import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  // Focus on the search bar once it mounts
  componentDidMount() {
    findDOMNode(this.refs.searchInput).focus()
  }

  // When a location term is submitted
  onSubmit(event) {
    console.log("event", event);
    // Prevent the form submit from reloading the page
    event.preventDefault()
    // Submit the location term
    if (this.state.term !== '') {
      this.props.setLocation(this.state.term)
    }
    // Reset the search bar
    this.setState({ term: '' })
  }

  // Update the search bar state for each key press
  handleOnChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div className="wrapper">
        <form>
          <input
            className="searchBar"
            type="text"
            placeholder="Enter your location.."
            onChange={this.handleOnChange}
            value={this.state.term}
            ref="searchInput" />
          <div className="icons">
            <button onClick={this.onSubmit({find: 'coffee'})}>
              <i className="fa fa-coffee" aria-hidden="true"></i>
            </button>
            <button>
              <i className="fa fa-car" aria-hidden="true"></i>
            </button>
            <button>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(SearchBar)