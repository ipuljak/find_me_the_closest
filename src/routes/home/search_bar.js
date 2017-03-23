import React, { Component } from 'react'
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest';

import * as actions from '../../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '', geoloc: '' }
    this.suggestSelect = this.suggestSelect.bind(this)
  }

  // Focus on the search bar once it mounts and enter in the geolocation
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let pos = position.coords.latitude + ', ' + position.coords.longitude
      this.setState({ term: pos, geoloc: pos })
    },
      error => {
        console.log('error', error)
      }, { timeout: 10000 })
  }

  // When a location term is submitted
  buttonClick(type) {
    // Submit the location term
    if (this.state.term !== '') {
      this.props.fetchLocation(this.state.term)
    } else {
      // If no location term is given, try to use the geolocation
      if (this.state.geoloc !== '') {
        this.props.fetchLocation(this.state.geoloc)
      } else {
        alert('Enter a location.')
      }
    }
  }

  // Check if the suggestion is a valid object 
  suggestSelect(loc) {
    if (loc.location) {
      this.props.setLocation(loc.location)
    } else {
      this.props.fetchLocation(loc)
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Geosuggest
          autoActivateFirstSuggest={true}
          initialValue={this.state.geoloc}
          onBlur={this.suggestSelect}
          onSuggestSelect={this.suggestSelect}
          />
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