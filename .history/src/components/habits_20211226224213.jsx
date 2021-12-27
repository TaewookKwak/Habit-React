import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0, key: 0 },
      { name: 'Rynning', count: 0, key: 1 },
      { name: 'Coding', count: 0, key: 2 },
    ],
  }
  handleIncreament = (habit) => {
    //state 오브젝트 안에 있는 count 를 증가 한 뒤 state 업데이트
    console.log(`Increase ${habit}`)
  }

  handleDecrement = (habit) => {
    console.log(`Decrease ${habit}`)
  }

  handleDelete = (habit) => {
    console.log(`Delete ${habit}`)
  }

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncreament}
            onIncrement={this.handleDelete}
            onIncrement={this.handleDecrement}
          />
        ))}
      </ul>
    )
  }
}
