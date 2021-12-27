import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    counter: 0,
  }

  render() {
    const habit = this.props.habit
    habit.forEach((habit) => {
      console.log(habit.count)
      if(habit.count == 1){
        this.state.counter += 1;
      }
    },
    return (
      <nav className="navbar">
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.state.counter}</span>
      </nav>
    )
  }
}

export default Navbar
