import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncrement(habit)
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit)
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit)
  }
  render() {
    const { handleIncreament, handleDecrement, handleDelete } = this.props
    return (
      <ul>
        {this.props.habit.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    )
  }
}
