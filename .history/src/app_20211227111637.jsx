import './App.css'
import Habits from './components/habits'
import Navbar from './components/navbar'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Habits />
      </>
    )
  }
}

export default App
