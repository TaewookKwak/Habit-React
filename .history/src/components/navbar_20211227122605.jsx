import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    let counter = 0
    const habit = this.props.habit
    habit.map((habit) => {
      return habit.count !== 0 ? counter++ : counter--
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
