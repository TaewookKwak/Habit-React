import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    const { handleIncreament, handleDecrement, handleDelete } = this.props
    return (
      <ul>
        {this.props.habit.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncreament={this.props.onIncrement}
            handleDecrement={this.props.onDecrement}
            handleDelete={this.props.onDelete}
          />
        ))}
      </ul>
    )
  }
}
