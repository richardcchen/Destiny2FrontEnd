import React, { Component } from 'react';
import './App.css';
import Test from './components/Test'
import ReduxTest from './Redux/ReduxTest'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Destiny 2 Frontend Test</h1>
        <ReduxTest />
      </div>
    );
  }
}

export default App;
