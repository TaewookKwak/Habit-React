import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    const {
      handleIncreament,
      handleDecrement,
      handleDelete,
    } = this.props.habits
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncreament}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}
