import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    let counter = 3
    const habit = this.props.habit
    habit.forEach((habit) => {
      return habit.count == 0 ? (counter -= 1) : (counter += 1)
    })
    return (
      <nav className="navbar">
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{counter}</span>
      </nav>
    )
  }
}

export default Navbar
