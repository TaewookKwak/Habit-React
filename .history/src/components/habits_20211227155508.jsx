import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habit.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.handleIncreament}
            onDecrement={this.props.handleDecrement}
            onDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    )
  }
}
