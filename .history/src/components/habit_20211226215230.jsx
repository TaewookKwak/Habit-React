import React, { Component } from 'react'

export default class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncreament = () => {
    //state 오브젝트 안에 있는 count 를 증가 한 뒤 state 업데이트
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
    //state 오브젝트 안에 있는 count 를 증가 한 뒤 state 업데이트
    this.setState({ count: this.state.count - 1 })
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
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}
