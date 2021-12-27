import React, { Component } from 'react'

class Add extends Component {
  render() {
    const habit = this.props
    console.log(habit)
    return (
      <div className="addHabit">
        <form className="addHabit-textBox">
          <input type="text" placeholder="Habit" required></input>
          <button className="addHabit-addBtn">Add</button>
        </form>
      </div>
    )
  }
}

export default Add
