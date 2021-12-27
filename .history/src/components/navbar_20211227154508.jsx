import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    counter: 0,
  }

  render() {
    const habit = this.props.habit
    return (
      <nav className="navbar">
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    )
  }
}

export default Navbar
