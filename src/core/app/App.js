import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../../routes/home'
import Coffee from '../../routes/coffee'
import './App.css'

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <div className="root">
        <Route exact path='/' component={Home} />
        <Route exact path='/coffee' component={Coffee} />
      </div>
    )
  }
}

export default App