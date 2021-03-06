import React, { Component } from 'react'
import Header from './Components/Header'
import MemeGenerator from './Container/MemeGenerator'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MemeGenerator/>
      </div>
    );
  }
}

export default App;
