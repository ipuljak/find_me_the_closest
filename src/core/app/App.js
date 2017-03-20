import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Home from '../../routes/home'
import Test from '../../routes/test'
import './App.css'

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Main App Component</h1>

        <Link to='/test'>Test</Link>

        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </div>
    )
  }
}

export default App