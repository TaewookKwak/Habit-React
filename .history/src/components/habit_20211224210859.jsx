import React, { Component } from 'react'

export default class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncreament = (event) => {
    console.log(event)
  }
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i class="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}
