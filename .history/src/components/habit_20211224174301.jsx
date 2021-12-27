import React, { Component } from 'react'

export default class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
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
