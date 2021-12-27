import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
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
