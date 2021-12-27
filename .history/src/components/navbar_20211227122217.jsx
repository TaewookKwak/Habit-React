import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    const habit = this.props.habit
    return (
      <nav className="navbar">
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">1</span>
      </nav>
    )
  }
}

export default Navbar
