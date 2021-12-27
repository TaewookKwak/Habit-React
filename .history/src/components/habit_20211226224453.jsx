import React, { Component } from 'react'

export default class Habit extends Component {
  handleIncreament = () => {}

  handleDecrement = () => {}

  handleDelete = () => {}

  render() {
    const { name, count } = this.props.habit
    console.log(this.props)
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}
