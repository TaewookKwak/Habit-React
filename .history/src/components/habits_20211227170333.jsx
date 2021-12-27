import React, { Component } from 'react'
import Add from './add'
import Habit from './habit'

export default class Habits extends Component {
  render() {
    return (
      <>
        <Add onAdd={this.props.handleAdd} />
        <ul>
          {this.props.habit.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.handleIncreament}
              onDecrement={this.props.handleDecrement}
              onDelete={this.props.handleDelete}
              onReset={this.props.handleReset}
            />
          ))}
        </ul>
        <Reset />
      </>
    )
  }
}
