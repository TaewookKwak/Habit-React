import { attempt } from 'lodash'
import React, { PureComponent } from 'react'

export default class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} mounted`)
  }
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} unmounted`)
  }

  handleIncreament = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    if (window.confirm('지우겠습니까?')) this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit
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
