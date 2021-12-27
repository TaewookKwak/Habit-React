import React, { Component } from 'react'

class Add extends Component {
  render() {
    return (
      <div className="addHabit">
        <form>
          <input type="text" placeholder="Habit" required></input>
        </form>
        <button className="addBtn">Add</button>
      </div>
    )
  }
}

export default Add
