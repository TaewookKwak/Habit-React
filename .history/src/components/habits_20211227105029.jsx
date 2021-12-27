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
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const count = habits[index].count - 1
    habits[index].count = count < 0 ? 0 : count
    this.setState({ habits: habits })
  }

  handleDelete = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits.splice(index, 1)
    this.setState({ habits: habits })
  }

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
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
