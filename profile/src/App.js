import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import About from './About';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <About/>
      </div>
    );
  }
}

export default App;
