import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    const {
      handleIncreament,
      handleDecrement,
      handleDelete,
    } = this.props.state.habits
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncreament}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    )
  }
}
