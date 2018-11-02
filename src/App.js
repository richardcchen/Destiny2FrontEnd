import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'

const apiKey = process.env.REACT_APP_DESTINY2_API_KEY

class App extends Component {
  render() {
    return (
      <div>
        <h1>Destiny 2 Frontend Test</h1>
        <Test />
      </div>
    );
  }
}

export default App;
