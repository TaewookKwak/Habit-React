import React, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0 },
      { name: 'Rynning', count: 0 },
      { name: 'Coding', count: 0 },
    ],
  }
  render() {
    return
    ;<ul>
      {this.state.habits.map((habit) => {
        ;<Habit />
      })}
    </ul>
  }
}
