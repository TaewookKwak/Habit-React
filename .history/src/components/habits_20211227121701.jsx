import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    console.log(`property : ${this.props}`)
    const { handleIncreament, handleDecrement, handleDelete } = this.props
    return (
      <ul>
        {this.props.habit.map((habit) => (
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
