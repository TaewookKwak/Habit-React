import React, { Component } from 'react'

class Add extends Component {
  render() {
    const habit = this.props.habit
    console.log(habit)
    return (
      <div className="addHabit">
        <form className="addHabit-textBox">
          <input type="text" placeholder="Habit" required></input>
          <button className="addHabit-addBtn" onSubmit={}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default Add
