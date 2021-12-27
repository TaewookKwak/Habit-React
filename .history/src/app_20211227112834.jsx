import './App.css'
import Habits from './components/habits'
import Navbar from './components/navbar'
import Add from './components/add'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Add />
        <Habits />
      </>
    )
  }
}

export default App
