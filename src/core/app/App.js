import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../../routes/home'
import Test from '../../routes/test'
import './App.css'

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <div className="root">
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </div>
    )
  }
}

export default App