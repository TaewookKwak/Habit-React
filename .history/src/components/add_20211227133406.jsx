import React, { Component } from 'react'

class Add extends Component {
  addHabit = (e) => {
    const habit = this.props.habit
    e.preventDefault()
    console.log(e)
    const habits = {
      name: `${e.target[0].value}`,
      count: 0,
      key: `${e.target}`,
    }
  }
  render() {
    return (
      <div className="addHabit">
        <form className="addHabit-textBox" onSubmit={this.addHabit}>
          <input type="text" placeholder="Habit" required></input>
          <button className="addHabit-addBtn">Add</button>
        </form>
      </div>
    )
  }
}

export default Add
