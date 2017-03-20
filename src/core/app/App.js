import React, { Component } from 'react';

import './App.css';

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;