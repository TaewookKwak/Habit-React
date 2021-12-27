import React, { Component } from 'react'

class Add extends Component {
  render() {
    return (
      <div className="addHabit">
        <form className="addHabit-textBox">
          <input type="text" placeholder="Habit" required></input>
        </form>
        <button className="addHabit-addBtn">Add</button>
      </div>
    )
  }
}

export default Add
