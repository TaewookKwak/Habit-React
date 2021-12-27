import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    counter: 0,
  }
  render() {
    const habit = this.props.habit
    habit.forEach((habit) => {
      console.log('render')
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
